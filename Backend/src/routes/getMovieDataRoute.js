import { getPopulatedMovieData } from "../TMDB/getPopulatedMovieData";

export const getMovieDataRoute = {
  method: "get",
  path: "/movie/:movieId",
  handler: async (req, res) => {
    const { movieId } = req.params;
    const populatedMovieData = await getPopulatedMovieData(movieId);
    res.status(200).json(populatedMovieData);
  },
};
