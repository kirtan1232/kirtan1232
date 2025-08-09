import React, { useState } from 'react';
import './PlayListPage.css';

const PlaylistPage = () => {
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Summer Vibes', artist: 'Chill Artist', duration: '3:45' },
    { id: 2, title: 'Midnight Drive', artist: 'Night Owl', duration: '4:20' },
    { id: 3, title: 'Golden Hour', artist: 'Sunset Band', duration: '3:30' },
    { id: 4, title: 'Electric Dreams', artist: 'Synth Master', duration: '5:15' },
    { id: 5, title: 'Ocean Waves', artist: 'Nature Sounds', duration: '2:50' },
  ]);
  
  const [successMessage, setSuccessMessage] = useState('');

  const removeSong = (id) => {
    const songToRemove = playlist.find(song => song.id === id);
    setPlaylist(playlist.filter(song => song.id !== id));
    setSuccessMessage(`Removed "${songToRemove.title}" from playlist`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="container">
      {/* Success Message */}
      {successMessage && (
        <div className="successMessage">
          {successMessage}
        </div>
      )}

      <div className="header">
        <h1 className="title">My Playlist</h1>
      </div>

      <div className="grid">
        {playlist.map((song) => (
          <div key={song.id} className="card">
            <div className="songInfo">
              <div className="songIcon">
                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="songDetails">
                <h3 className="songTitle">{song.title}</h3>
                <p className="songArtist">{song.artist} • {song.duration}</p>
              </div>
            </div>
            <button
              onClick={() => removeSong(song.id)}
              className="removeButton"
            >
              Remove from Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;