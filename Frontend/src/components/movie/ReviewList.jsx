import { useFetchData } from "../home/useFetchData";
import classes from "../styles/Review.module.css";
import ReviewListItem from "./ReviewListItem";
const ReviewList = ({ movieId }) => {
  const { isLoading, data: reviews } = useFetchData(
    `http://localhost:8080/movie/${movieId}/reviews`
  );
  return (
    <div className={classes["review-section"]}>
      <h1>Reviews</h1>
      <div className={classes.reviews}>
        {reviews.map((review) => (
          <ReviewListItem review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
