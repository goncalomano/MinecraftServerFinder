"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import ReactSkinview3d from "react-skinview3d"

interface PlayerInfo {
    id: string;
    name: string;
    // Add any other fields you expect from the API response
}

const PlayerPage: React.FC = () => {
    const [playerName, setPlayerName] = useState<string>('alksjoajnsoi');
    const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
    const [error, setError] = useState<string | null>(null);


    const handleFetch = () => {
        if (playerName) {
            fetch(`http://localhost:3000/api/player?name=${playerName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setPlayerInfo(data);
                    setError(null);
                })
                .catch(error => {
                    setPlayerInfo(null);
                    setError('Player does not exist');
                    console.error('Error:', error);
                });
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    return (
        <div className='flex gap-2'>
            <div className='flex flex-col gap-2 w-1/2'>
                <h1>Search a Player's Info</h1>
                <input
                    className="border-2 border-black w-48"
                    type="text"
                    placeholder="Enter Player Name"
                    value={playerName}
                    onChange={handleInputChange}
                />
                <button onClick={handleFetch} className='w-48 bg-black font-bold text-white p-3 rounded-md'>Fetch Player Info</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {playerInfo && <div className='mt-52'>
                    <p> <b>Player UUID: </b> {JSON.stringify(playerInfo.id)}</p>
                    <button onClick={() => {window.location.replace(`https://mineskin.eu/download/${playerName}`)}} className='w-48 bg-black font-bold text-white p-3 rounded-md'>Download Player Skin</button>
                    
                </div>}
            </div>
            <div className='flex flex-col w-1/2'>
                <ReactSkinview3d
                    className='border-gray-300 border-2 rounded-md'
                    skinUrl={`https://mineskin.eu/skin/${playerName}`}
                    height="500"
                    width="500"
                />
            </div>
        </div>



    );
};

export default PlayerPage;
