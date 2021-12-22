import './Playlist.css';
import TrackList from '../TrackList/TrackList';


function Playlist(props) {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            <TrackList name={props.name} tracks={props.tracks} isRemoval={true} onRemove={props.onRemove}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist