import { getMovieVideos } from "../TMDB/getMovieVideos";
export const getMovieVideosRoute = {
  method: "get",
  path: "/movie/:movieId/videos",
  handler: async (req, res) => {
    const { movieId } = req.params;
    const movieVideos = await getMovieVideos(movieId);
    res.status(200).json(movieVideos);
  },
};
