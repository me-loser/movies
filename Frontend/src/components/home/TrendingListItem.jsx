import classes from "../styles/TrendingListItem.module.css";

const TrendingListItem = ({ movie }) => {
  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const date = new Date(movie.release_date || movie.first_air_date);
  const month = date.toLocaleString("default", { month: "long" });
  return (
    <div className={classes["movie-card"]}>
      <div className={classes.poster}>
        <img src={image_url} className={classes["poster-image"]} alt="" />
      </div>
      <div className={classes.details}>
        <h3 className={classes.title}>{movie.title || movie.name}</h3>
        <div className={classes["date"]}>
          <p>Date</p>
          <h4>
            {date.getDate()} {month}, {date.getFullYear()}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default TrendingListItem;
