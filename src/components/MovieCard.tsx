import React from "react";
import { MovieSearchResult } from "../types/Movie.ts";

interface MovieCardProps {
  movie: MovieSearchResult;
  onClick: () => void;
  isFavorite: boolean;
  toggleFavorite: (e: React.MouseEvent) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onClick,
  isFavorite,
  toggleFavorite,
}) => {
  const posterUrl =
    movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450";

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event
    toggleFavorite(e);
  };

  return (
    <div
      className="relative rounded overflow-hidden shadow-lg cursor-pointer w-full hover:scale-105"
      style={{ aspectRatio: "2/3" }} // Standard movie poster aspect ratio
      onClick={onClick}
    >
      {/* Background Poster Image */}
      <div className="absolute inset-0 ">
        <img
          src={posterUrl}
          alt={`${movie.Title} poster`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>

      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full shadow-md z-10"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          className={`w-6 h-6 ${isFavorite ? "text-red-500" : "text-gray-600"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Movie Info */}
      <div className="absolute bottom-0 w-full p-4 text-white">
        <h3 className="font-bold text-lg mb-1 truncate" title={movie.Title}>
          {movie.Title}
        </h3>
        <p className="text-gray-300">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
