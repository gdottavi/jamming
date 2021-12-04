import react, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([
    {
      name: 'Back in Black',
      artist: 'AC/DC',
      album: 'Back in Black',
      id: 1
    },
    {
      name: 'Something',
      artist: 'The Beatles',
      album: 'One',
      id: 2
    }
  ])

  const playlistName = "Greg's Chilling List";
  const playlistTracks = [
    {
      name: 'Levee Song',
      artist: 'Led Zepplen',
      album: 'Led Zepplen IV',
      id: 1
    },
    {
      name: 'Rocket Man',
      artist: 'Elton Jon',
      album: 'Rocket Man',
      id: 2
    }
  ]

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults}/>
          <Playlist name={playlistName} tracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
