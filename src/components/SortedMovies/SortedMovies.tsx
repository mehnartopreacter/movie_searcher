import { useGetSortedMoviesQuery } from "../../store/services/discover";
import { SortedMoviesWrapper } from "./SortedMovies.styles";
import { MoviesList } from "../MoviesList";
import { Loader } from "../Loader";
import { ErrorWarning } from "../ErrorWarning";

type SortedMoviesProps = {
  sortType: string;
};

export const SortedMovies = ({ sortType }: SortedMoviesProps) => {
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
