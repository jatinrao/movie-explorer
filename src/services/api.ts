import { MovieSearchResponse, MovieDetails } from "../types/Movie.ts";

const API_KEY = "baf59e21";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (
  query: string,
  page: number
): Promise<MovieSearchResponse> => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&type=movie&s=${encodeURIComponent(query)}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getMovieDetails = async (
  imdbID: string
): Promise<MovieDetails> => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
