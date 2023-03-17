import { getPopularMovies } from "../TMDB/getPopularMovies";
export const getPopularMoviesRoute = {
  method: "get",
  path: "/popular",
  handler: async (req, res) => {
    const movieData = await getPopularMovies();
    res.status(200).json(movieData);
  },
};
