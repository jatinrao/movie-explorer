import React from "react";
import { IconButton, FieldLabel, FieldValue, Tag } from "./Atoms";

export const CloseButton = ({ onClose }: any) => (
  <IconButton
    onClick={onClose}
    label="Close"
    className="hover:bg-gray-200 bg-white  text-[#000] shadow-sm"
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    }
  />
);

export const FavoriteButton = ({ isFavorite, toggleFavorite }: any) => (
  <IconButton
    onClick={(e: any) => {
      e.stopPropagation();
      toggleFavorite();
    }}
    label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    className="bg-white hover:bg-gray-100 shadow-md"
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        className={`w-6 h-6 ${isFavorite ? "text-red-500" : "text-gray-500"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    }
  />
);

// RatingBadge Molecule
export const RatingBadge = ({ rating }: { rating: any }) => {
  if (rating <= 0) return null;

  return (
    <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full flex items-center shadow-md">
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <span>{rating}/10</span>
    </div>
  );
};

export const MovieField = ({ label, value, renderValue }: any) => (
  <div>
    <FieldLabel>{label}</FieldLabel>
    {renderValue ? (
      renderValue(value || "N/A")
    ) : (
      <FieldValue>{value}</FieldValue>
    )}
  </div>
);

export const GenreTags = ({ genres }: any) => {
  if (!genres || genres === "N/A") return <FieldValue>N/A</FieldValue>;

  return (
    <div className="flex flex-wrap gap-1">
      {genres.split(", ").map((genre: any, index: number) => (
        <Tag key={index}>{genre}</Tag>
      ))}
    </div>
  );
};

export const AwardsSection = ({ awards }: any) => {
  if (!awards || awards === "N/A") return null;

  const hasOscar =
    awards.toLowerCase().includes("oscar") ||
    awards.toLowerCase().includes("academy award");

  return (
    <div className="mb-4 p-3 bg-gradient-to-r from-amber-50 to-yellow-100 rounded-lg border border-yellow-200">
      <div className="flex items-center">
        {hasOscar ? (
          <svg
            className="w-6 h-6 text-yellow-600 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18 10c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2zm-6-9c-7.73 0-9 1.36-9 3v2.5c0 .64.36 1.22.92 1.5.56.28 1.08.5 1.08.5v-2c1.92-1.66 7-2 7-2s5.08.34 7 2v2s.52-.22 1.08-.5c.56-.28.92-.86.92-1.5V4c0-1.64-1.27-3-9-3z" />
            <path d="M16 16.5l-4 2-4-2 .74-3.44 3.26 1.44 3.26-1.44.74 3.44z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-yellow-600 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>
        )}
        <p className="font-medium text-gray-800">{awards}</p>
      </div>
    </div>
  );
};

export const MoviePoster = ({
  posterUrl,
  title,
  isFavorite,
  toggleFavorite,
  imdbRating,
  isLoading = false,
  className = "",
}: any) => {
  if (isLoading) {
    return (
      <div
        className={`w-full h-96 bg-gray-200 animate-pulse rounded-lg ${className}`}
      ></div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <img
        src={posterUrl}
        data-testid="movie-poster"
        alt={`${title} poster`}
        className="w-full h-auto rounded-lg transition-transform duration-200 hover:scale-105"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>

      <div className="absolute bottom-2 left-2">
        <RatingBadge data-testId="rating" rating={imdbRating} />
      </div>
    </div>
  );
};

export const RatingCard = ({ rating }: any) => {
  let icon: any | null = null;
  let bgColor = "bg-gray-200";
  let textColor = "text-gray-800";

  if (rating.Source === "Internet Movie Database") {
    icon = (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.023.488-.048.146-.048.22-.195.22-.42V10.08c0-.226-.074-.374-.22-.422l-.068-.07z"
          fill="#F5C518"
        />
        <path
          d="M22.416 0H1.62C.742 0 .041.742.041 1.62v20.796c0 .877.701 1.578 1.579 1.578h20.797c.878 0 1.579-.701 1.579-1.578V1.62c0-.878-.701-1.579-1.58-1.579zM4.998 15.626h-1.96V8.26h1.96v7.366zm7.225-.6c0 .309-.268.55-.65.55H9.852c-.347 0-.551-.204-.551-.498v-5.02c0-.347.204-.552.551-.552h1.72c.383 0 .65.241.65.552v5.02l-.55-.051zm6.294.6h-1.72l-.13-1.022h-1.21l-.13 1.022h-1.694l1.337-7.366h2.288l1.26 7.366zm3.104 0h-1.96V8.26h1.96v7.366z"
          fill="#F5C518"
        />
        <path
          d="M15.663 10.027l-.237 1.771h.787l-.236-1.771-.157-.94h-.001l-.156.94z"
          fill="#F5C518"
        />
      </svg>
    );
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-800";
  } else if (rating.Source === "Rotten Tomatoes") {
    icon = (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M16.78 15.28l-5.14-5.14 5.14-5.14a.5.5 0 00-.7-.7l-5.14 5.14-5.14-5.14a.5.5 0 00-.7.7l5.14 5.14-5.14 5.14a.5.5 0 00.7.7l5.14-5.14 5.14 5.14a.5.5 0 00.7-.7z"
          fill="#FF5733"
        />
      </svg>
    );
    bgColor = "bg-red-100";
    textColor = "text-red-800";
  } else if (rating.Source === "Metacritic") {
    icon = (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          fill="#4C6EF5"
        />
        <path d="M12 17a5 5 0 100-10 5 5 0 000 10z" fill="white" />
      </svg>
    );
    bgColor = "bg-blue-100";
    textColor = "text-blue-800";
  }

  return (
    <div
      className={`flex items-center justify-between p-2 rounded-lg ${bgColor} hover:brightness-95 transition-all cursor-pointer`}
    >
      <div className="flex items-center">
        {icon}
        <span className={`font-medium ${textColor}`}>{rating.Source}</span>
      </div>
      <span className={`font-bold ${textColor}`}>{rating.Value}</span>
    </div>
  );
};
