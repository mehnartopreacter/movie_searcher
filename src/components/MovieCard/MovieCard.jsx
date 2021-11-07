import { CardImage, MovieCardWrapper, MovieTitle } from "./MovieCard.styles";
import { concatImageUrl } from "../../utils/concatImageUrl";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardWrapper>
      <Link to={`/movies/${movie.id}`}>
        <div className="image-wrapper">
          <CardImage url={concatImageUrl(movie.poster_path)}></CardImage>
        </div>
        <MovieTitle to={`/movies/${movie.id}`}>{movie.title}</MovieTitle>
      </Link>
    </MovieCardWrapper>
  );
};
