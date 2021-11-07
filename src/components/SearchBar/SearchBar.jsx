import { SearchWrapper } from "./SearchBar.styles";
import { Input } from "@chakra-ui/react";

export const SearchBar = ({ handleChangeSearchInput }) => {
  return (
    <SearchWrapper>
      <Input
        placeholder="Start typing name of movie here..."
        onChange={handleChangeSearchInput}
        autoFocus
      />
    </SearchWrapper>
  );
};
