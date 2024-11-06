import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
    const [joinCode, setJoinCode] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        // Validate the room code with backend
        if (validateRoomCode(joinCode)) {
            navigate(`/genre-selection/${joinCode}`);
        } else {
            alert("Invalid Room Code");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-6">Join Room</h2>
                <input
                    type="text"
                    placeholder="Enter Room Code"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    className="w-full p-3 rounded mb-4"
                />
                <button onClick={handleJoinRoom} className="bg-green-500 p-3 rounded">
                    Join
                </button>
            </div>
        </div>
    );
};

export default JoinRoom;
