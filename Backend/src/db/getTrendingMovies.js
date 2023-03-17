import { db } from "./db";
import trendingData from "../../trendingData.json";
export const getTrendingMovies = () => {
  //   const connection = db.getConnection();
  //   const trendingMovies = connection.collection("trending").find({}).toArray();
  return trendingData.results;
};
