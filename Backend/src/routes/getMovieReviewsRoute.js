import { getMovieReviews } from "../TMDB/getMovieReviews";
export const getMovieReviewsRoute = {
  path: "/movie/:movieId/reviews",
  method: "get",
  handler: async (req, res) => {
    const { movieId } = req.params;
    const reviews = await getMovieReviews(movieId);
    res.status(200).json(reviews);
  },
};
