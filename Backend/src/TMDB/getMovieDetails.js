import dotenv from "dotenv";
dotenv.config();

export const getMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;
  const response = await fetch(url);
  const movieDetails = await response.json();
  return movieDetails;
};
