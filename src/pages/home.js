import React from 'react';
import { Link } from 'react-router-dom'



const Home = () => {
  return (


    <section name="home" className="bg-movies h-screen bg-no-repeat bg-cover text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl">
            Ready to watch some new movies?
          </h1>
          <p className="mx-auto mt-4 max-w-xl font sm:text-xl sm:leading-relaxed">
            Tell us what type of movies you're looking for and we'll handle the rest
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="animate-bounce block w-auto rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              to="/form"
            >
              Lets go !
            </Link>
          </div>
        </div>
      </div>
    </section>



  )
}


export default Home