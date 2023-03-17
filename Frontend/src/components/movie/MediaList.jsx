import classes from "../styles/MediaList.module.css";
import { useState } from "react";
import MovieImagesList from "./MovieImagesList";
import MovieVideosList from "./MovieVideosList";
import { useNavigate } from "react-router-dom";
const MediaList = ({ movieId }) => {
  const navigate = useNavigate();
  const [showVideos, setShowVideos] = useState(false);
  const navigateTo = () => {
    if (showVideos) {
      navigate(`/movie/${movieId}/videos`);
    } else {
      navigate(`/movie/${movieId}/images`);
    }
  };
  return (
    <div className={classes["media-list"]}>
      <div className={classes.links}>
        <ul className={classes.navbar}>
          <li>Media</li>
          <li
            className={!showVideos ? classes.selected : ""}
            onClick={() => setShowVideos(false)}
          >
            Posters
          </li>
          <li
            className={showVideos ? classes.selected : ""}
            onClick={() => setShowVideos(true)}
          >
            Videos
          </li>
        </ul>
        <button onClick={navigateTo}>View All</button>
      </div>
      {showVideos ? (
        <MovieVideosList movieId={movieId} />
      ) : (
        <MovieImagesList movieId={movieId} />
      )}
    </div>
  );
};

export default MediaList;
