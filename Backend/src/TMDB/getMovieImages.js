import dotenv from "dotenv";
dotenv.config();
export const getMovieImages = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_API_KEY}`;
  const response = await fetch(url);
  const movieImages = await response.json();
  console.log(movieImages);
  const moviePosters = movieImages.posters;
  moviePosters.length = 6;
  return moviePosters;
};
