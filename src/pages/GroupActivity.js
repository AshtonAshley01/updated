import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupActivity = () => {
    const navigate = useNavigate();

    const handleCreateRoom = () => {
        console.log("Navigating to Create Room");
        navigate('/create-room');
    };
    
    const handleJoinRoom = () => {
        console.log("Navigating to Join Room");
        navigate('/join-room');
    };
    

    return (
        <div className="group-activity-container min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white pt-20">
            <h2 className="text-3xl font-bold mb-6">Group Activity</h2>
            <div className="flex space-x-4">
                <button
                    onClick={handleCreateRoom}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Create Room
                </button>
                <button
                    onClick={handleJoinRoom}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Join Room
                </button>
            </div>
        </div>
    );
};

export default GroupActivity;
