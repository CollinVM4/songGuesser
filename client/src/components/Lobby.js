// src/components/Lobby.js
import React, { useState, useEffect } from 'react'; // Make sure to import useEffect
import './Lobby.css';

const Lobby = () => {
    const [playerName, setPlayerName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [inviteLink, setInviteLink] = useState('');
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/songs');
                const data = await response.json();
                setSongs(data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, []);

    const handleStartGame = () => {
        const link = `https://yourgameurl.com/invite/${playerName}`;
        setInviteLink(link);
    };

    return (
        <div className="lobby">
            <h1>Song Guesser Lobby</h1>
            <p>This is the lobby component!</p> {/* Debugging line */}
            <div>
                <label>
                    Player Name:
                    <input 
                        type="text" 
                        value={playerName} 
                        onChange={(e) => setPlayerName(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Select Avatar:
                    <select value={avatar} onChange={(e) => setAvatar(e.target.value)}>
                        <option value="">Select an avatar</option>
                        <option value="avatar1">Avatar 1</option>
                        <option value="avatar2">Avatar 2</option>
                    </select>
                </label>
            </div>
            <button onClick={handleStartGame}>Start Game</button>
            {inviteLink && (
                <div>
                    <p>Invite Link: {inviteLink}</p>
                    <button onClick={() => navigator.clipboard.writeText(inviteLink)}>
                        Copy Link
                    </button>
                </div>
            )}
        </div>
    );
};

export default Lobby;
