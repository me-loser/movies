import { useParams } from "react-router-dom";
const PersonPage = () => {
  const { id: person_id } = useParams();
  return <h1>Here will be persons details with id {person_id}</h1>;
};

export default PersonPage;
