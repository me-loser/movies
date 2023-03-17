import { useParams } from "react-router";
import { useFetchData } from "../home/useFetchData";
import MoviePoster from "./MoviePoster";
import TopBilledCast from "./TopBilledCast";
import ReviewList from "./ReviewList";
import MediaList from "./MediaList";
import Loading from "../ui/Loading";
const MovieDetailsPage = () => {
  const { id: movieId } = useParams();
  const { isLoading, data: movieData } = useFetchData(
    `http://localhost:8080/movie/${movieId}`
  );
  const { isLoading: isLoadingReviews, data: reviews } = useFetchData(
    `http://localhost:8080/movie/${movieId}/reviews`
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MoviePoster movieData={movieData} />
      <TopBilledCast casts={movieData.topBilledCast || []} movieId={movieId} />
      <MediaList movieId={movieId} />
      <ReviewList movieId={movieId} />
    </>
  );
};

export default MovieDetailsPage;
