// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './pages/Form';
import { MovieList } from './components/MovieList.js';
import MovieSwiper from './components/MovieSwiper.js';
import Navbar from './components/navBar';
import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
// import movieId from "./data/movie-ids.json"
// import languageShort from "./data/languages.json"
import { fetchData } from "./Utils/movie-api.js";

import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebaseConfig.js';

import Signup from './pages/Signup';
import Login from './pages/Login';
import GroupActivity from './pages/GroupActivity';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';



function App() {

  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({ Genre: "", Language: "", Year: "" });
  const [shortListMovie, setShortListMovie] = useState([]);
  
  
  const navigate = useNavigate();
  

  //handle shortlist submit
  const handleMovieSubmit = (shortlist) => {
    setShortListMovie(shortlist)
  };


  // Handle form submission
  const handleSubmit = (data) => {
  // Make API call with form data and genre ID
    fetchData(data).then((results) => {
    setMovies(results);
    setFormData(data);
  });
};


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/group-activity' element={<GroupActivity />} />
        <Route path='/create-room' element={<CreateRoom />} />
        <Route path='/join-room' element={<JoinRoom />} />

        <Route path='/form' element={<Form onSubmit={handleSubmit} />} />
        {/* <Route path='/home' element={<Short-list />} /> */}
        <Route path='/picks' element={<MovieSwiper movies={movies} onMovieSubmit={handleMovieSubmit} />} />
        <Route path='/my-movies' element={<MovieList movies={shortListMovie} />} />
      </Routes>
    </>
  );
}

export default App;



