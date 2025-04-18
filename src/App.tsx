import React, { useState, useEffect, Suspense } from "react";
import Navbar from "./components/Navbar";
import { searchMovies, getMovieDetails } from "./services/api";
import { MovieSearchResult, MovieDetails } from "./types/Movie";
import { Loader } from "./components/Atoms";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

// const MovieDetail = React.lazy(() => import('./components/MovieDetail'));
// const MovieList = React.lazy(() => import('./components/MovieList'));
// const SearchBar = React.lazy(() => import('./components/SearchBar'));

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieSearchResult[]>([]);
  const [favorites, setFavorites] = useState<MovieSearchResult[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"search" | "favorites">("search");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentQuery, setCurrentQuery] = useState<string>("");
  const [totalResults, setTotalResults] = useState<number>(1);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (query: string, page: number): Promise<void> => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setCurrentQuery(query);
    try {
      const data = await searchMovies(query, page);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again." + err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMovie = async (
    movieSelected: MovieSearchResult
  ): Promise<void> => {
    setDetailLoading(true);
    setIsDetailOpen(true);

    try {
      const movie = await getMovieDetails(movieSelected.imdbID);
      setSelectedMovie(movie);
    } catch (err) {
      setError("Failed to load movie details " + err);
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCloseDetail = (): void => {
    setIsDetailOpen(false);
  };

  const toggleFavorite = (movie: MovieSearchResult): void => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (imdbID: string): boolean => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white animated-background ">
      <div className="relative z-10">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="container mx-auto px-6 py-4">
          {activeTab === "search" && (
            <>
              <div className="my-8">
                <h1 className="text-3xl lg:text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Discover Movies
                </h1>
                <p className="lg:text-center text-blue-100 opacity-80">
                  Search for your favorite movies and build your collection.
                </p>
              </div>
              <Suspense fallback={<Loader />}>
                <SearchBar onSearch={handleSearch} />
              </Suspense>
            </>
          )}
          {activeTab === "favorites" && (
            <div className="my-8">
              <h1 className="text-3xl lg:text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Your Favorites
              </h1>
              <p className="text-blue-100 opacity-80 lg:text-center">
                Your personally curated collection of amazing films
              </p>
            </div>
          )}
        </div>
        <main className="container mx-auto px-6 py-4">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-xl p-8 mb-8">
            {activeTab === "search" && (
              <>
                {loading && <Loader />}

                {error && !loading && (
                  <div className="bg-red-900/30 backdrop-blur-sm text-red-200 p-5 rounded-xl my-6 border border-red-500/30">
                    {error}
                  </div>
                )}

                {!loading && !error && movies.length > 0 && (
                  <div className="">
                    <p className="text-md font-bold mb-4 text-white">
                      Search Results ({totalResults}):
                    </p>
                    <hr className="border-t border-blue-200/30 mb-4" />
                    <Suspense fallback={<Loader />}>
                      <MovieList
                        movies={movies}
                        onMovieSelect={handleSelectMovie}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                      />
                    </Suspense>
                    <div className="flex justify-center mt-6 gap-8">
                      <button
                        onClick={() => {
                          handleSearch(currentQuery, currentPage - 1);
                          setCurrentPage((prev) => prev - 1);
                        }}
                        role="last-page"
                        className="bg-blue-600 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                        disabled={currentPage === 1}
                      >
                        Last Page
                      </button>
                      <button
                        onClick={() => {
                          const nextPage = currentPage + 1;
                          setCurrentPage(nextPage);
                          handleSearch(currentQuery, nextPage);
                        }}
                        role="next-page"
                        disabled={movies.length < 10}
                        className="bg-blue-600 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                      >
                        Next Page
                      </button>
                    </div>
                  </div>
                )}

                {!loading && !error && movies.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16">
                    <svg
                      className="w-16 h-16 text-blue-300/50 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 4v16M17 4v16M3 8h18M3 16h18"
                      ></path>
                    </svg>
                    <p className="text-blue-200/70 text-lg">
                      Search for movies to get started
                    </p>
                  </div>
                )}
              </>
            )}

            {activeTab === "favorites" && (
              <>
                {favorites.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-blue-200/70">
                    <svg
                      className="w-16 h-16 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                    <p className="text-lg mb-2">
                      Your favorites collection is empty
                    </p>
                    <p>Find movies you love and add them to your favorites</p>
                  </div>
                ) : (
                  <MovieList
                    movies={favorites}
                    onMovieSelect={handleSelectMovie}
                    isFavorite={isFavorite}
                    toggleFavorite={toggleFavorite}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>

      {isDetailOpen && selectedMovie && (
        <Suspense fallback={<Loader />}>
          <MovieDetail
            movie={selectedMovie}
            onClose={handleCloseDetail}
            isFavorite={isFavorite(selectedMovie.imdbID)}
            toggleFavorite={() => toggleFavorite(selectedMovie)}
            isLoading={detailLoading}
          />
        </Suspense>
      )}
    </div>
  );
};

export default App;
