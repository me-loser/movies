import TrendingListItem from "./TrendingListItem";
import { Link } from "react-router-dom";
const Popular = ({ popularMovies }) => {
  return (
    <div>
      <h1>What's Popular</h1>
      <div className="items">
        {popularMovies.map((movie, index) => {
          return (
            <Link
              to={`/movie/${movie.id}`}
              style={{ all: "unset" }}
              key={movie.id}
            >
              <TrendingListItem movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Popular;
