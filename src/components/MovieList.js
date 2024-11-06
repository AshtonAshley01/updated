import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function MovieList({ movies }) {
  const [shortList, setShortList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const storedShortList = JSON.parse(localStorage.getItem('movie'));
    setShortList(storedShortList);
  }, []);

  useEffect(() => {
    setIsUpdated(true);
  }, [shortList]);

  const handleRemove = (id) => {
    const updatedList = shortList.filter((item) => item.id !== id);
    setShortList(updatedList);
    localStorage.setItem('movie', JSON.stringify(updatedList));
  };

  return (
    <div name="picks" className='w-full min-h-screen sm:h-full lg:min-h-screen bg-[#141d2b] text-white'>
      {shortList && shortList.length > 0 ? (
        <>
          <h1 className="animate-text pt-24 pb-3 px-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl text-center">
            Here are your picked movies :
          </h1>
          <h2 className="text-center pb-6 px-4">If you would like to remove a movie, hover over the image and click "Remove" or if you want to search more movies: </h2>
          <div className="swipe-buttons flex justify-center gap-8">
              <Link to="/form">
                <button className="FinishButton block w-full rounded border border-blue-600 bg-none px-12 py-3 text-sm font-medium text-gray hover:bg-[#50b49b23] hover:text-gray focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                 Search for more movies
                </button>
              </Link>
            </div>
          <div className="px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-10 pt-10">
            {/* Show the shortlisted movies in the list */}
            {shortList.map((shorty) => (
              <div className="movie relative overflow-hidden cursor-pointer rounded-xl drop-shadow-xl" key={shorty.id}>
              <img className='block object-cover w-full h-full transition-transform duration-300 ease-out'
                src={`http://image.tmdb.org/t/p/w185${shorty.poster_path}`}
                alt={shorty.title}
              />
              <div className="overlay">
                <h3>{shorty.title}</h3>
                {/* By clicking this button it will clear the shortlisted movies from gallery and localstorage */}
                <button className="remove bg-red-400 rounded px-2 py-1" onClick={() => handleRemove(shorty.id)}>Remove</button>
              </div>
            </div>
            
            ))}
            {!isUpdated && <p>Loading...</p>}
          </div>
        </>
      ) : (
        // if no movies left in the shortlist this message generates
        <div name="no-picks" className='w-full h-screen bg-[#141d2b] text-white'>
          <div className="mx-auto px-5 flex flex-col justify-center h-full">
            <h1 className="animate-text pb-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl text-center">
              You don't have any movies here yet
            </h1>
            <div className="movie-card p-10">
              <div className="swipe-buttons flex justify-center gap-8">
                <Link to="/form">
                  <button className="block w-full rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  >
                    Search for movies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}

export default MovieList;
