import { getPopularMoviesRoute } from "./getPopularMoviesRoute";
import { getTrendingDataRoute } from "./getTrendingDataRoute";
import { getMovieDataRoute } from "./getMovieDataRoute";
import { getMovieReviewsRoute } from "./getMovieReviewsRoute";
import { getMovieImagesRoute } from "./getMovieImagesRoute";
import { getMovieVideosRoute } from "./getMovieVideosRoute";
export const routes = [
  getTrendingDataRoute,
  getPopularMoviesRoute,
  getMovieDataRoute,
  getMovieReviewsRoute,
  getMovieImagesRoute,
  getMovieVideosRoute,
];
