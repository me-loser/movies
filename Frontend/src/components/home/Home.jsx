import TrendingList from "./TrendingList";
import { useFetchData } from "./useFetchData";
import Popular from "./Popular";

const Home = () => {
  const { isLoading, data: trendingMovies } = useFetchData(
    "http://localhost:8080/trending"
  );
  const { isLoading: isLoadingPopular, data: popularMovies } = useFetchData(
    "http://localhost:8080/popular"
  );
  return (
    <>
      <TrendingList movies={trendingMovies} />
      <Popular popularMovies={popularMovies} />
    </>
  );
};
export default Home;
