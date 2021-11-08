import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  position: fixed;
  background-color: #2c2c2f;
  height: 70px;
  z-index: 2;
  width: 100%;
`;

export const NavWrapper = styled.div`
  height: 100%;
`;

export const NavLink = styled(Link)`
  padding: 20px 10px;
  height: 100%;
  width: 100%;
  max-width: 80px;
  text-align: center;

  :hover {
    background-color: #494949;
  }

  :active {
    background-color: dimgray;
  }
`;
