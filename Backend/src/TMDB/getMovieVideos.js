import dotenv from "dotenv";
dotenv.config();
export const getMovieVideos = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}`;
  const response = await fetch(url);
  const youtube_url = `https://youtube.googleapis.com/youtube/v3/videos?part=player&id=vaBqU00XzWo&key=[YOUR_API_KEY]`;
  const result = await response.json();
  return result.results;
};
