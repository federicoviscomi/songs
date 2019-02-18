import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

interface SongListProps {
    songs: any,
    selectSong: any
}

interface SongListState {
}

class SongList extends React.Component<SongListProps, SongListState> {

    constructor(props: SongListProps) {
        super(props);
    }

    renderList(){
        return this.props.songs.map((song: any)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        onClick={() => this.props.selectSong(song)}
                        className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){        
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        songs: state.songs
    };
};

export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList);