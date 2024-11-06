import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieSelection = () => {
    const [selectedMovies, setSelectedMovies] = useState([]);
    const navigate = useNavigate();
    const { roomCode } = useParams();

    const handleSelectMovie = (movie) => {
        if (selectedMovies.length < 5) {
            setSelectedMovies((prevMovies) => [...prevMovies, movie]);
        }
    };

    const handleNext = () => {
        // Store selectedMovies in backend with roomCode
        console.log("Selected movies:", selectedMovies);
        navigate(`/swipe/${roomCode}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Select up to 5 Movies</h2>
            <div className="flex space-x-2">
                <button onClick={() => handleSelectMovie('Movie 1')} className="bg-purple-500 p-3 rounded">Movie 1</button>
                <button onClick={() => handleSelectMovie('Movie 2')} className="bg-pink-500 p-3 rounded">Movie 2</button>
                {/* More movie buttons... */}
            </div>
            <button onClick={handleNext} className="bg-green-500 mt-6 p-3 rounded">Next</button>
        </div>
    );
};

export default MovieSelection;
