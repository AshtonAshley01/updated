import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CreateRoom = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleCreateRoom = () => {
        const newRoomCode = uuidv4().slice(0, 6); // Generate a 6-character code
        setRoomCode(newRoomCode);
        
        // Store roomCode in the backend with room info (host, etc.)
        console.log("Room created with code:", newRoomCode);
    };

    const startSession = () => {
        navigate(`/genre-selection/${roomCode}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold mb-6">Create Room</h2>
                <button onClick={handleCreateRoom} className="bg-green-500 p-3 rounded">Generate Code</button>
                {roomCode && (
                    <>
                        <p className="mt-4">Share this code with others to join: <strong>{roomCode}</strong></p>
                        <button onClick={startSession} className="bg-blue-500 mt-4 p-3 rounded">
                            Start Session
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateRoom;
