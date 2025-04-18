import React, { useState, useEffect } from "react";
import { MovieDetails } from "../types/Movie";
import { CloseButton, MoviePoster } from "./Molecules";
import { MovieInfoSection } from "./Organisms";
import { Loader } from "./Atoms";

// MovieDetailModal Template
interface MovieDetailProps {
  movie: MovieDetails;
  onClose: () => void;
  isFavorite: boolean;
  toggleFavorite: () => void;
  isLoading?: boolean;
}

const MovieDetail: React.FC<MovieDetailProps> = ({
  movie,
  onClose,
  isFavorite,
  toggleFavorite,
  isLoading = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);

    // Set up escape key event listener
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Match the duration of the transition
  };

  const posterUrl =
    movie?.Poster !== "N/A" ? movie?.Poster : "https://placehold.co/300x450";

  const imdbRating = movie?.imdbRating ? parseFloat(movie.imdbRating) : 0;

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animated-background-quick">
        <div className="bg-white rounded-lg max-w-[72rem] min-w-[80vw] w-full max-h-[90vh] min-h-[90vh] overflow-hidden p-8 text-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animated-background-quick transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      data-testid="dialog"
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-lg max-w-[72rem] w-full max-h-[90vh] overflow-hidden z-10 shadow-xl transition-transform duration-300 ${isVisible ? "scale-100" : "scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-20">
          <CloseButton onClose={handleClose} />
        </div>

        <div className="h-full md:flex">
          {/* Sticky left column with poster */}
          <div className="md:w-1/3 md:sticky md:top-0 md:self-start md:h-screen p-6">
            <MoviePoster
              posterUrl={posterUrl}
              title={movie?.Title || "Movie"}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              imdbRating={imdbRating}
              isLoading={isLoading}
            />
          </div>

          {/* Scrollable right column with info */}
          <div className="md:w-2/3 p-6 overflow-y-auto max-h-[90vh]">
            <MovieInfoSection movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
