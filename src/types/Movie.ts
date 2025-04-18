export interface MovieSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieSearchResponse {
  Search: MovieSearchResult[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface MovieRating {
  Source: string;
  Value: string;
}

export interface MovieDetails extends MovieSearchResult {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
