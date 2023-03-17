import dotenv from "dotenv";
dotenv.config();
export const getMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_API_KEY}`;
  const response = await fetch(url);
  const reviewData = await response.json();
  return await reviewData.results;
};
