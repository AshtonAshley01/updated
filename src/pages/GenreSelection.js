import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const GenreSelection = () => {
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();
    const { roomCode } = useParams();

    const handleGenreChange = (genre) => {
        setGenres((prevGenres) =>
            prevGenres.includes(genre)
                ? prevGenres.filter((g) => g !== genre)
                : [...prevGenres, genre]
        );
    };

    const handleNext = () => {
        // Store genres selection in backend with roomCode
        console.log("Selected genres:", genres);
        navigate(`/movie-selection/${roomCode}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Select Your Favorite Genres</h2>
            <div className="flex space-x-2">
                <button onClick={() => handleGenreChange('Action')} className="bg-blue-500 p-3 rounded">Action</button>
                <button onClick={() => handleGenreChange('Comedy')} className="bg-yellow-500 p-3 rounded">Comedy</button>
                {/* More genre buttons... */}
            </div>
            <button onClick={handleNext} className="bg-green-500 mt-6 p-3 rounded">Next</button>
        </div>
    );
};

export default GenreSelection;
