import classes from "../styles/Review.module.css";
import { useState } from "react";
const ReviewListItem = ({ review }) => {
  const [showText, setShowText] = useState(false);
  const date = new Date(review.created_at);
  const month = date.toLocaleString("default", { month: "long" });
  const img_url = `https://image.tmdb.org/t/p/w185${review.author_details.avatar_path}`;
  const textClassName = showText
    ? `${classes.content} ${classes.show}`
    : classes.content;
  return (
    <div className={classes["review-card"]}>
      <div className={classes.avatar}>
        <img
          src={img_url}
          className={classes["avatar-image"]}
          alt={review.author[0]}
        />
      </div>
      <div className={classes.review}>
        <h2>A review by {review.author}</h2>
        <p>
          Written by <span>{review.author}</span> on {month} {date.getDate()},{" "}
          {date.getFullYear()}
        </p>
        <div className={classes["content-box"]}>
          <p className={textClassName}>{review.content}</p>
          <button
            className={classes["read-more"]}
            onClick={() => setShowText(!showText)}
          >
            {showText ? "Show Less..." : "Read More..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
