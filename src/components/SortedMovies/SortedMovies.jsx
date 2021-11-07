import { useGetSortedMoviesQuery } from "../../store/services/discover";
import { SortedMoviesWrapper } from "./SortedMovies.styles";
import { MoviesList } from "../MoviesList/MoviesList";

export const SortedMovies = ({ sortType }) => {
  const { data, error, isLoading } = useGetSortedMoviesQuery(sortType);
  console.log(data);
  return (
    <SortedMoviesWrapper>
      <MoviesList movies={data?.results.slice(0, 4)} />
    </SortedMoviesWrapper>
  );
};
