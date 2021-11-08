import {
  MovieDetailsWrapper,
  MoviePageWrapper,
  MoviePoster,
} from "./MoviePage.styles";
import { useParams } from "react-router-dom";
import { useGetMovieInfoQuery } from "../../store/services/movies";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { concatImageUrl } from "../../utils/concatImageUrl";
import { joinListOfNamedEntities } from "../../utils/joinListOfNamedEntities";
import { ErrorWarning } from "../../components/ErrorWarning/ErrorWarning";
import { Loader } from "../../components/Loader/Loader";
import { getBudgetWithCommas } from "../../utils/getBudgetWithCommas";

export const MoviePage = () => {
  const { id }: any = useParams();
  const { data, error, isLoading } = useGetMovieInfoQuery(id);

  const postePath = data && data.poster_path;
  const title = data && data.title;
  const story = data && data.overview;
  const budget = data && getBudgetWithCommas(data.budget);
  const genres = data && joinListOfNamedEntities(data.genres);
  const release = data && data.release_date;
  const rating = data && data.vote_average;
  const production = data && joinListOfNamedEntities(data.production_companies);

  if (error) {
    return <ErrorWarning />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MoviePageWrapper>
      <Flex>
        <MoviePoster src={concatImageUrl(postePath)} />
        <MovieDetailsWrapper>
          <Heading as="h2">{title}</Heading>
          <Flex margin="20px 0" direction="column">
            <Text fontSize="25px">Story</Text>
            <Text>{story}</Text>
          </Flex>
          <Grid maxWidth="400px" templateColumns="repeat(2, 1fr)">
            <Text>Budget</Text>
            <Text>{budget}</Text>
            <Text>Genres</Text>
            <Text>{genres}</Text>
            <Text>Release</Text>
            <Text>{release}</Text>
            <Text>Rating</Text>
            <Text>{rating}</Text>
            <Text>Production</Text>
            <Text>{production}</Text>
          </Grid>
        </MovieDetailsWrapper>
      </Flex>
    </MoviePageWrapper>
  );
};
