import classes from "../styles/MoviePoster.module.css";
const MoviePoster = ({ movieData }) => {
  const backdrop_path = `https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`;
  const poster_path = `https://image.tmdb.org/t/p/w1280${movieData.poster_path}`;
  const release_date = new Date(movieData.release_date);
  return (
    <div className={classes["movie-details"]}>
      <img src={backdrop_path} className={classes["backdrop-image"]} />
      <div className={classes.poster}>
        <img src={poster_path} />
      </div>
      <div className={classes.details}>
        <h1>{movieData.title}</h1>
        <div>
          <span>
            {release_date.getDate()}/{release_date.getMonth() + 1}/
            {release_date.getFullYear()}
          </span>
          <span>
            {movieData.length > 0 &&
              movieData.genres.map((genre) => genre.name + ", ")}
          </span>
          <span>
            {parseInt(movieData.runtime / 60)} h{" "}
            {movieData.runtime - parseInt(movieData.runtime / 60) * 60} min
          </span>
        </div>
        <h6 className={classes.tagline}>{movieData.tagline}</h6>
        <h4>Overview</h4>
        <p>{movieData.overview}</p>
        <div className={classes["collection"]}>
          <div>
            <h4>Status</h4>
            <p>{movieData.status}</p>
          </div>
          <div>
            <h4>Budget</h4>
            <p>${movieData.budget}</p>
          </div>
          <div>
            <h4>Revenue</h4>
            <p>${movieData.revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
