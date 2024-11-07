import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// List of genres with sample images (replace with your own images or URLs)
const genresData = [
    { name: 'Action', imgSrc: 'https://via.placeholder.com/150?text=Action' },
    { name: 'Biography', imgSrc: 'https://via.placeholder.com/150?text=Biography' },
    { name: 'Drama', imgSrc: 'https://via.placeholder.com/150?text=Drama' },
    { name: 'Horror', imgSrc: 'https://via.placeholder.com/150?text=Horror' },
    { name: 'Romance', imgSrc: 'https://via.placeholder.com/150?text=Romance' },
    { name: 'Comedy', imgSrc: 'https://via.placeholder.com/150?text=Comedy' },
    { name: 'Adventure', imgSrc: 'https://via.placeholder.com/150?text=Adventure' },
    { name: 'Documentary', imgSrc: 'https://via.placeholder.com/150?text=Documentary' },
    { name: 'Kids', imgSrc: 'https://via.placeholder.com/150?text=Kids' },
    { name: 'Fantasy', imgSrc: 'https://via.placeholder.com/150?text=Fantasy' },
    { name: 'Science Fiction', imgSrc: 'https://via.placeholder.com/150?text=Science+Fiction' },
    { name: 'Family', imgSrc: 'https://via.placeholder.com/150?text=Family' },
];

const GenreSelection = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const navigate = useNavigate();
    const { roomCode } = useParams();

    const toggleGenre = (genre) => {
        setSelectedGenres((prevSelected) =>
            prevSelected.includes(genre)
                ? prevSelected.filter((g) => g !== genre)
                : [...prevSelected, genre]
        );
    };

    const handleNext = () => {
        // Store selected genres in the backend using roomCode
        console.log("Selected genres:", selectedGenres);
        navigate(`/movie-selection/${roomCode}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h2 className="text-3xl font-bold mb-6">Select Your Favorite Genres</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {genresData.map((genre) => (
                    <div
                        key={genre.name}
                        onClick={() => toggleGenre(genre.name)}
                        className={`relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 ${
                            selectedGenres.includes(genre.name)
                                ? 'ring-4 ring-green-500 scale-105'
                                : 'ring-2 ring-transparent hover:scale-105'
                        }`}
                    >
                        <img
                            src={genre.imgSrc}
                            alt={genre.name}
                            className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold">{genre.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleNext}
                className="bg-green-500 mt-6 px-6 py-3 rounded-full text-white font-semibold hover:bg-green-600 transition"
            >
                Next
            </button>
        </div>
    );
};

export default GenreSelection;
