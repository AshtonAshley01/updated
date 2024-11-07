import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData } from '../Utils/movie-api';

const MovieSelection = ({ onSelectionComplete }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const { roomCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const formData = { genre: 'Action', language: 'en', year: 2023 }; // Replace with actual formData
      const fetchedMovies = await fetchData(formData);
      setMovies(fetchedMovies);
    };

    fetchMovies();
  }, []);

  const toggleMovieSelection = (movie) => {
    setSelectedMovies((prevSelected) =>
      prevSelected.includes(movie)
        ? prevSelected.filter((m) => m !== movie)
        : [...prevSelected, movie]
    );
  };

  const handleNext = () => {
    onSelectionComplete(selectedMovies); // Call function to pass selected movies to App.js
    navigate(`/swipe/${roomCode}`); // Navigate to SwipeVoting page
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Select up to 5 Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => toggleMovieSelection(movie)}
            className={`relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 ${
              selectedMovies.includes(movie)
                ? 'ring-4 ring-green-500 scale-105'
                : 'ring-2 ring-transparent hover:scale-105'
            }`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-center font-semibold">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={selectedMovies.length === 0 || selectedMovies.length > 5}
        className={`mt-8 px-6 py-3 rounded-full text-white font-semibold transition ${
          selectedMovies.length > 0 && selectedMovies.length <= 5
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default MovieSelection;
