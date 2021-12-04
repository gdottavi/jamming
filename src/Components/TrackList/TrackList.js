import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {

    const tracks = props.tracks;
    console.log("tracklist: ");
    console.log(tracks);


    const trackList = tracks.map((track) => {
        return (
            <Track track={track} key={track.id}/>
        )
    });


    return (
        <div className="TrackList">
            {trackList}
        </div>
    )
}

export default TrackList;