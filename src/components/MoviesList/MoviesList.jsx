import { MovieCard } from "../MovieCard/MovieCard";
import { MoviesListWrapper } from "./MoviesList.styles";
import { Grid } from "@chakra-ui/react";

export const MoviesList = ({ movies }) => {
  return (
    <MoviesListWrapper>
      <Grid templateColumns="repeat(4, 1fr)">
        {movies?.slice(0, 10).map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </Grid>
    </MoviesListWrapper>
  );
};