import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {

    const tracks = props.tracks;

    const trackList = tracks.map((track) => {
        return (
            <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>
        )
    });


    return (
        <div className="TrackList">
            {trackList}
        </div>
    )
}

export default TrackList;