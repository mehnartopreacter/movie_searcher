import { useGetSortedMoviesQuery } from "../../store/services/discover";
import { SortedMoviesWrapper } from "./SortedMovies.styles";
import { MoviesList } from "../MoviesList/MoviesList";
import { Loader } from "../Loader/Loader";
import { ErrorWarning } from "../ErrorWarning/ErrorWarning";

export const SortedMovies = ({ sortType }) => {
  const { data, error, isLoading } = useGetSortedMoviesQuery(sortType);

  const movies = data && data.results.slice(0, 4);

  if (error) {
    return <ErrorWarning />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SortedMoviesWrapper>
      <MoviesList movies={movies} />
    </SortedMoviesWrapper>
  );
};
