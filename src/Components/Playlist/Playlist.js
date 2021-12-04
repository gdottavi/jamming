import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import Track from '../Track/Track';

function Playlist(props) {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            <TrackList name={props.name} tracks={props.tracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist