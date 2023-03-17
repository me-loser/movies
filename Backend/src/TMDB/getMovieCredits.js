export const getMovieCredits = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`;
  const response = await fetch(url);
  const movieCredits = await response.json();
  return movieCredits;
};
