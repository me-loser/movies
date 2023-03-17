import { getMovieCredits } from "./getMovieCredits";
import { getMovieDetails } from "./getMovieDetails";
import dotenv from "dotenv";
dotenv.config();
export const getPopulatedMovieData = async (id) => {
  const movieDetails = await getMovieDetails(id);
  const movieCredits = await getMovieCredits(id);
  let topBilledCast = [];
  for (let i = 0; i < 8; i++) {
    topBilledCast.push(movieCredits.cast[i]);
  }
  const movieData = {
    ...movieDetails,
    topBilledCast,
  };
  return movieData;
};
