import { useFetchData } from "../home/useFetchData";

const MovieVideosList = ({ movieId }) => {
  const { isLoading, data: movieVideos } = useFetchData(
    `http://localhost:8080/movie/${movieId}/videos`
  );
  console.log(movieVideos);
  return <h1>Video List</h1>;
};

export default MovieVideosList;
