import { SearchPageWrapper } from "./SearchPage.styles";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useGetFoundMoviesQuery } from "../../store/services/search";
import { Section } from "../../styles/global";

export const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, error, isLoading } = useGetFoundMoviesQuery(searchInput);

  const handleChangeSearchInput = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const debouncedHandleChangeSearchInput = useCallback(
    debounce(handleChangeSearchInput, 500),
    []
  );

  return (
    <SearchPageWrapper>
      <Section>
        <SearchBar handleChangeSearchInput={debouncedHandleChangeSearchInput} />
      </Section>
      <Section>
        <MoviesList movies={data?.results} />
      </Section>
    </SearchPageWrapper>
  );
};
