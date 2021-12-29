import './Playlist.css';
import TrackList from '../TrackList/TrackList';


function Playlist(props) {

    function handleNameChange(e){
        props.onNameChange(e.target.value); 
    
    }

    return (
        <div className="Playlist">
            <input defaultValue={props.name} onChange={handleNameChange}/>
            <TrackList name={props.name} tracks={props.tracks} isRemoval={true} onRemove={props.onRemove}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist