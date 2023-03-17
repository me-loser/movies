import TopBilledCastItem from "./TopBilledCastItem";
import classes from "../styles/TopBilledCast.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const TopBilledCast = ({ casts, movieId }) => {
  const navigate = useNavigate();
  const navigateToCast = () => {
    navigate(`/movie/${movieId}/cast`);
  };
  return (
    <>
      <h1>Top Billed Cast</h1>
      <div className="cast-items">
        {casts.map((cast) => (
          <Link to={`/person/${cast.id}`} style={{ all: "unset" }}>
            <TopBilledCastItem cast={cast} />
          </Link>
        ))}
      </div>
      <button className={classes["full-button"]} onClick={navigateToCast}>
        Full Cast & Crew
      </button>
    </>
  );
};
export default TopBilledCast;
