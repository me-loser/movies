import classes from "../styles/MediaList.module.css";
const MovieImagesListItem = ({ image }) => {
  const img_url = `https://image.tmdb.org/t/p/w342${image.file_path}`;
  return <img className={classes["movie-image"]} src={img_url}></img>;
};
export default MovieImagesListItem;
