import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SwipeVoting = ({ selectedMovies }) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [likedMovies, setLikedMovies] = useState([]);
    const navigate = useNavigate();
    const { roomCode } = useParams();

    if (!selectedMovies || selectedMovies.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p>No movies to display.</p>
            </div>
        );
    }

    const currentMovie = selectedMovies[currentMovieIndex];

    const handleSwipeRight = () => {
        // Add the current movie to the likedMovies array
        setLikedMovies((prevLikedMovies) => [...prevLikedMovies, currentMovie]);
        goToNextMovie();
    };

    const handleSwipeLeft = () => {
        goToNextMovie();
    };

    const goToNextMovie = () => {
        if (currentMovieIndex < selectedMovies.length - 1) {
            setCurrentMovieIndex(currentMovieIndex + 1);
        } else {
            // Log likedMovies to verify contents before navigation
            console.log("Liked movies:", likedMovies);
            
            // Navigate to the results page with the liked movies
            navigate(`/results/${roomCode}`, { state: { likedMovies } });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Your Pick</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg text-center">
                <img
                    src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
                    alt={currentMovie.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{currentMovie.title}</h3>
                <p className="text-gray-300 mb-4">
                    {currentMovie.overview || "No description available."}
                </p>
                <p className="text-gray-400 mb-2">
                    <strong>Release Date:</strong> {currentMovie.release_date || "N/A"}
                </p>
                <p className="text-gray-400 mb-4">
                    <strong>Language:</strong> {currentMovie.original_language.toUpperCase() || "N/A"}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        onClick={handleSwipeLeft}
                        className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition"
                    >
                        Swipe Left
                    </button>
                    <button
                        onClick={handleSwipeRight}
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                        Swipe Right
                    </button>
                </div>
            </div>
            <button
                onClick={() => navigate(`/results/${roomCode}`, { state: { likedMovies } })}
                className="mt-8 px-6 py-3 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 transition"
            >
                Finish
            </button>
        </div>
    );
};

export default SwipeVoting;
