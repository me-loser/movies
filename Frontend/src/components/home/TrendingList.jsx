import { Link } from "react-router-dom";
import TrendingListItem from "./TrendingListItem";
import trendingData from "../../../../Backend/trendingData.json";
const TrendingList = ({ movies }) => {
  return (
    <div className="container">
      <h1>Trending</h1>
      <div className="items">
        {trendingData.results.map((movie, index) => {
          const navigateTo =
            movie.media_type === "movie"
              ? `/movie/${movie.id}`
              : `/tv/${movie.id}`;
          return (
            <Link to={navigateTo} style={{ all: "unset" }} key={movie.id}>
              <TrendingListItem movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingList;
