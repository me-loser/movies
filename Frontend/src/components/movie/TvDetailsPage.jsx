import { useParams } from "react-router-dom";
const TvDetailsPage = () => {
  const { id: tvId } = useParams();
  return <h1>Here tv details of id {tvId} will come up.</h1>;
};

export default TvDetailsPage;
