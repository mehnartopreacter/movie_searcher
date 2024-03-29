import { SearchPageWrapper } from "./SearchPage.styles";
import { SearchBar } from "../../components/SearchBar";
import { MoviesList } from "../../components/MoviesList";
import { ChangeEvent, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useGetFoundMoviesQuery } from "../../store/services/search";
import { Section } from "../../styles/global";
import { ErrorWarning } from "../../components/ErrorWarning";
import { Loader } from "../../components/Loader";

export const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, error, isLoading } = useGetFoundMoviesQuery(searchInput);

  const movies = data && data.results;

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const debouncedHandleChangeSearchInput = useCallback(
    debounce(handleChangeSearchInput, 500),
    []
  );

  // Не понимаю как пофиксить, что useGetFoundMoviesQuery вызывается с пустой строкой
  // и из-за пустой строки гет запрос приходит с ошибкой, поэтому сделал {error && searchInput && <ErrorWarning />}
  return (
    <SearchPageWrapper>
      <Section>
        <SearchBar handleChangeSearchInput={debouncedHandleChangeSearchInput} />
      </Section>
      {isLoading && <Loader />}
      {error && searchInput && <ErrorWarning />}
      <Section>
        <MoviesList movies={movies} />
      </Section>
    </SearchPageWrapper>
  );
};
