import { useFetchData } from "../home/useFetchData";
import classes from "../styles/MediaList.module.css";
import MovieImagesListItem from "./MovieImagesListItem";
import { Link } from "react-router-dom";
const MovieImagesList = ({ movieId }) => {
  const { isLoading, data: movieImages } = useFetchData(
    `http://localhost:8080/movie/${movieId}/images`
  );
  return (
    <div className={classes["movie-images"]}>
      {movieImages.map((image, index) => (
        <MovieImagesListItem key={index} image={image} />
      ))}
      <div className={classes["button-container"]}>
        <Link to={`/movie/${movieId}/images`} style={{ all: "unset" }}>
          <button>View All</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieImagesList;
