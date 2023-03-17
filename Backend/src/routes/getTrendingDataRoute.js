import { getTrendingMovies } from "../db/getTrendingMovies";
export const getTrendingDataRoute = {
  method: "get",
  path: "/trending",
  handler: async (req, res) => {
    const response = await getTrendingMovies();
    res.status(200).json(response);
  },
};
