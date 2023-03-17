import classes from "../styles/TopBilledCast.module.css";
const TopBilledCastItem = ({ cast }) => {
  const img_url = `https://image.tmdb.org/t/p/w185${cast.profile_path}`;
  return (
    <div className={classes["cast-card"]}>
      <img
        src={img_url}
        alt="photo is missing"
        className={classes["cast-image"]}
      />
      <div className={classes.names}>
        <h3>{cast.original_name}</h3>
        <h5>{cast.character}</h5>
      </div>
    </div>
  );
};
export default TopBilledCastItem;
