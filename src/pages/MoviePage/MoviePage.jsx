import {
  MovieDetailsWrapper,
  MoviePageWrapper,
  MoviePoster,
} from "./MoviePage.styles";
import { useParams } from "react-router-dom";
import { useGetMovieInfoQuery } from "../../store/services/movies";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { concatImageUrl } from "../../utils/concatImageUrl";
import { Section } from "../../styles/global";
import { joinListOfNamedEntities } from "../../utils/joinListOfNamedEntities";

export const MoviePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMovieInfoQuery(id);
  return (
    <Section>
      <MoviePageWrapper>
        <Flex>
          <MoviePoster src={concatImageUrl(data?.poster_path)} />
          <MovieDetailsWrapper>
            <Heading as="h2">{data?.title}</Heading>
            <Flex direction="column">
              <Text fontSize="25px">Story</Text>
              <Text>{data?.overview}</Text>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)">
              <Text>Budget</Text>
              <Text>{data?.budget}</Text>
              <Text>Genres</Text>
              <Text>{joinListOfNamedEntities(data?.genres)}</Text>
              <Text>Release</Text>
              <Text>{data?.release_date}</Text>
              <Text>Rating</Text>
              <Text>{data?.vote_average}</Text>
              <Text>Production</Text>
              <Text>{joinListOfNamedEntities(data?.production_companies)}</Text>
            </Grid>
          </MovieDetailsWrapper>
        </Flex>
      </MoviePageWrapper>
    </Section>
  );
};
