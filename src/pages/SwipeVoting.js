import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SwipeVoting = () => {
    const [swipes, setSwipes] = useState({});
    const { roomCode } = useParams();

    const handleSwipe = (movie, direction) => {
        setSwipes((prevSwipes) => ({
            ...prevSwipes,
            [movie]: (prevSwipes[movie] || 0) + (direction === 'right' ? 1 : 0)
        }));
    };

    const handleFinish = () => {
        // Store swipes data and calculate final result
        console.log("Final swipes:", swipes);
        // Redirect to results page or show the final movie
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Swipe on Movies</h2>
            <div className="flex space-x-2">
                <button onClick={() => handleSwipe('Movie 1', 'right')} className="bg-blue-500 p-3 rounded">Swipe Right on Movie 1</button>
                <button onClick={() => handleSwipe('Movie 1', 'left')} className="bg-red-500 p-3 rounded">Swipe Left on Movie 1</button>
                {/* More swipe buttons... */}
            </div>
            <button onClick={handleFinish} className="bg-green-500 mt-6 p-3 rounded">Finish</button>
        </div>
    );
};

export default SwipeVoting;
