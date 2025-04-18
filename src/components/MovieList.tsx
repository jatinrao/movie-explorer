import React from "react";
import MovieCard from "./MovieCard.tsx";
import { MovieSearchResult } from "../types/Movie";

interface MovieListProps {
  movies: MovieSearchResult[];
  onMovieSelect: (movie: MovieSearchResult) => void;
  isFavorite: (imdbID: string) => boolean;
  toggleFavorite: (movie: MovieSearchResult) => void;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  onMovieSelect,
  isFavorite,
  toggleFavorite,
}) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieSelect(movie)}
          isFavorite={isFavorite(movie.imdbID)}
          toggleFavorite={(e: React.MouseEvent) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
        />
      ))}
    </div>
  );
};

export default MovieList;
