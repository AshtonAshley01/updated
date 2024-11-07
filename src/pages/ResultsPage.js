import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const likedMovies = location.state?.likedMovies || []; // Access likedMovies from the state

    if (likedMovies.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p>No movies were liked.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Top Picks</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {likedMovies.map((movie) => (
                    <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                        <img
                            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">{movie.title}</h3>
                        <p className="text-gray-400 mt-2">Release Date: {movie.release_date || "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultsPage;
