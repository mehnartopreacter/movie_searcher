import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   body {
    background-color: #000;
   }
`;

export const Main = styled.main`
  font-family: "Roboto", sans-serif;
  position: relative;
  background-color: #000;
  color: #fff;
  padding-top: 70px;
`;

export const Section = styled.section`
  padding: 50px 30px;
  overflow: hidden;
`;
