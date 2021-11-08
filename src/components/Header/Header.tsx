import { HeaderWrapper, NavWrapper, NavLink } from "./Header.styles";
import { Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Flex flexDirection="row" justify="center" height="100%" align="center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
        </Flex>
      </NavWrapper>
    </HeaderWrapper>
  );
};
