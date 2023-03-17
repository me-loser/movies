import { getMovieImages } from "../TMDB/getMovieImages";
export const getMovieImagesRoute = {
  path: "/movie/:movieId/images",
  method: "get",
  handler: async (req, res) => {
    const { movieId } = req.params;
    const movieImages = await getMovieImages(movieId);
    res.status(200).json(movieImages);
  },
};
