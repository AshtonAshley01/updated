import React, { useState } from 'react';
import './App.css';
import Form from './pages/Form';
import { MovieList } from './components/MovieList.js';
import MovieSwiper from './components/MovieSwiper.js';
import Navbar from './components/navBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home.js'; // Assuming Home component exists in pages folder
import { fetchData } from './Utils/movie-api.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebaseConfig.js';

import Signup from './pages/Signup';
import Login from './pages/Login';
import GroupActivity from './pages/GroupActivity';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';
import GenreSelection from './pages/GenreSelection'; // Import GenreSelection
import MovieSelection from './pages/MovieSelection'; // Import MovieSelection
import SwipeVoting from './pages/SwipeVoting'; // Import SwipeVoting
import ResultsPage from './pages/ResultsPage.js'; // Import ResultsPage

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [formData, setFormData] = useState({ Genre: '', Language: '', Year: '' });
//   const [shortListMovie, setShortListMovie] = useState([]);
  
//   const navigate = useNavigate();

//   // Handle shortlist submit
//   const handleMovieSubmit = (shortlist) => {
//     setShortListMovie(shortlist);
//   };

//   // Handle form submission
//   const handleSubmit = (data) => {
//     // Make API call with form data and genre ID
//     fetchData(data).then((results) => {
//       setMovies(results);
//       setFormData(data);
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Home />} />

//         {/* Signup and Login */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Room Creation and Joining */}
//         <Route path="/create-room" element={<CreateRoom />} />
//         <Route path="/join-room" element={<JoinRoom />} />

//         {/* Group Activity */}
//         <Route path="/group-activity" element={<GroupActivity />} />

//         {/* Genre Selection with roomCode */}
//         <Route path="/genre-selection/:roomCode" element={<GenreSelection />} />

//         {/* Movie Selection with roomCode */}
//         <Route path="/movie-selection/:roomCode" element={<MovieSelection />} />

//         {/* Swipe Voting with roomCode */}
//         <Route path="/swipe/:roomCode" element={<SwipeVoting />} />

//         {/* Other Routes */}
//         <Route path="/form" element={<Form onSubmit={handleSubmit} />} />
//         <Route path="/picks" element={<MovieSwiper movies={movies} onMovieSubmit={handleMovieSubmit} />} />
//         <Route path="/my-movies" element={<MovieList movies={shortListMovie} />} />
//       </Routes>
//     </>
//   );
// }

function App() {
  const [selectedMovies, setSelectedMovies] = useState([]); // Centralized state for selected movies

  const handleMovieSelection = (movies) => {
    setSelectedMovies(movies);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/group-activity" element={<GroupActivity />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route
          path="/movie-selection/:roomCode"
          element={<MovieSelection onSelectionComplete={handleMovieSelection} />}
        />
        <Route
          path="/swipe/:roomCode"
          element={<SwipeVoting selectedMovies={selectedMovies} />}
        />
        <Route
          path="/results/:roomCode"
          element={<ResultsPage />}
        />
      </Routes>
    </>
  );
}



export default App;
