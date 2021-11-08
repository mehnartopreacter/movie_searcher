import { SearchWrapper } from "./SearchBar.styles";
import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type SearchBarProps = {
  handleChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ handleChangeSearchInput }: SearchBarProps) => {
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
