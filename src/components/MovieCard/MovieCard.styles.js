import styled from "styled-components";

export const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 280px;
  width: 200px;
  margin-right: 20px;

  .image-wrapper {
    overflow: hidden;
    position: relative;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-image: url(${(props) => {
    return props.url;
  }});
  background-color: aliceblue;
  background-position: center;

  :hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
  }
`;

export const MovieTitle = styled.p``;
