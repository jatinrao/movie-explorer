import React from "react";
import { SectionTitle, Badge } from "./Atoms";
import { RatingCard, AwardsSection, MovieField, GenreTags } from "./Molecules";

export const RatingsSection = ({ ratings }: any) => {
  if (!ratings || !ratings.length) return null;

  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg">
      <SectionTitle
        icon={
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37 1.71-4.04 1.71 4.04 4.38.37-3.32 2.88.99 4.28z" />
          </svg>
        }
      >
        Ratings
      </SectionTitle>
      <div className="space-y-3">
        {ratings.map((rating: any, index: number) => (
          <RatingCard key={index} rating={rating} />
        ))}
      </div>
    </div>
  );
};

export const MovieInfoSection = ({ movie }: any) => (
  <div>
    <h2 className="text-3xl font-bold mb-2 text-gray-800">{movie?.Title}</h2>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge>{movie?.Year}</Badge>
      <Badge>{movie?.Runtime}</Badge>
      <Badge>{movie?.Rated}</Badge>
    </div>

    <AwardsSection awards={movie?.Awards} />

    <div className="mb-6">
      <SectionTitle icon={null}>Plot</SectionTitle>
      <p className="text-gray-700 leading-relaxed">
        {movie?.Plot || "No plot available"}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <MovieField label="Director" value={movie?.Director} renderValue={null} />

      <MovieField
        label="Genre"
        value={movie?.Genre}
        renderValue={(value: any) => <GenreTags genres={value} />}
      />

      <MovieField label="Actors" value={movie?.Actors} renderValue={null} />

      <MovieField label="Released" value={movie?.Released} renderValue={null} />
    </div>

    <RatingsSection ratings={movie?.Ratings} />
  </div>
);
