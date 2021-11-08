import { CardImage, MovieCardWrapper, MovieTitle } from "./MovieCard.styles";
import { concatImageUrl } from "../../utils/concatImageUrl";
import { Link } from "react-router-dom";
import { MovieType } from "../../types/types";

type MovieCardProps = {
  movie: MovieType;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <MovieCardWrapper>
      <Link to={`/movies/${movie.id}`}>
        <div className="image-wrapper">
          <CardImage url={concatImageUrl(movie.poster_path)}></CardImage>
        </div>
        <MovieTitle>{movie.title}</MovieTitle>
      </Link>
    </MovieCardWrapper>
  );
};
