import dotenv from "dotenv";
dotenv.config();

export const getPopularMovies = async () => {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const url = `
https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;
  const response = await fetch(url);
  const popularMovies = await response.json();
  return popularMovies.results;
};
