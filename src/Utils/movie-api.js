// import movieId from '../data/movie-ids.json'
// import languageShort from "../data/languages.json"


// export const fetchData = (data) => {
//   // Find the genre ID based on the selected genre name
//   let genreID;
//   if (data.genre) {
//     genreID = movieId.find(
//       (element) => element.name.toLowerCase() === data.genre.toLowerCase()
//     ).id;
//   } else {
//     genreID = "";
//   }

//   let langShort;
//   if (data.language) {
//     langShort = languageShort.find(
//       (e) => e.language.toLowerCase() === data.language.toLowerCase()
//     ).short;
//   } else {
//     langShort = "";
//   }

//   // Make API call with form data and genre ID
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=9ecb2171ed5e0635071b94b5d388556c&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${data.year}&with_genres=${genreID}&with_original_language=${langShort}&with_watch_monetization_types=flatrate`
//   )
//     .then((response) => response.json())
//     .then((data) => data.results)
//     .catch((error) => {
//       console.log(error);
//       return [];
//     });
// };



import movieId from '../data/movie-ids.json';
import languageShort from "../data/languages.json";

export const fetchData = (data) => {
  // Find the genre ID based on the selected genre name
  let genreID;
  if (data.genre) {
    const genre = movieId.find(
      (element) => element.name.toLowerCase() === data.genre.toLowerCase()
    );
    genreID = genre ? genre.id : ""; // Use empty string if genre not found
  } else {
    genreID = "";
  }

  // Find the language short code
  let langShort;
  if (data.language) {
    const language = languageShort.find(
      (e) => e.language.toLowerCase() === data.language.toLowerCase()
    );
    langShort = language ? language.short : ""; // Use empty string if language not found
  } else {
    langShort = "";
  }

  // Make API call with form data and genre ID
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=9ecb2171ed5e0635071b94b5d388556c&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${data.year}&with_genres=${genreID}&with_original_language=${langShort}&with_watch_monetization_types=flatrate`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

