import { HomePageWrapper } from "./HomePage.styles";
import { Heading } from "@chakra-ui/react";
import { SortedMovies } from "../../components/SortedMovies";
import { discoverEndpoints } from "../../fixtures/endpoints";
import { Section } from "../../styles/global";

export const HomePage = () => {
  return (
    <HomePageWrapper>
      <Section>
        <Heading as="h2">Newest Movies</Heading>
        <SortedMovies sortType={discoverEndpoints.newest} />
      </Section>
      <Section>
        <Heading as="h2">Popular Movies</Heading>
        <SortedMovies sortType={discoverEndpoints.popular} />
      </Section>
      <Section>
        <Heading as="h2">Highest Grossing Movies</Heading>
        <SortedMovies sortType={discoverEndpoints.highestGrossing} />
      </Section>
    </HomePageWrapper>
  );
};
