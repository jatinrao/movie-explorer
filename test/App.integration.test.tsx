import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../src/App";
import { searchMovies, getMovieDetails } from "../src/services/api";

// Mock the API service
jest.mock("../src/services/api");

describe("App integration test", () => {
  // Sample movie data for testing
  const mockSearchResults = {
    Response: "True",
    Search: [
      {
        Title: "Inception",
        Year: "2010",
        imdbID: "tt1375666",
        Type: "movie",
        Poster: "https://example.com/inception.jpg",
      },
      {
        Title: "The Matrix",
        Year: "1999",
        imdbID: "tt0133093",
        Type: "movie",
        Poster: "https://example.com/matrix.jpg",
      },
    ],
    totalResults: "2",
  };

  const mockMovieDetails = {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. 157 wins & 220 nominations total",
    Poster: "https://example.com/inception.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "87%",
      },
      {
        Source: "Metacritic",
        Value: "74/100",
      },
    ],
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "2,285,590",
    imdbID: "tt1375666",
    Type: "movie",
    DVD: "07 Dec 2010",
    BoxOffice: "$292,576,195",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock localStorage
    const localStorageMock = {
      getItem: jest.fn(() => JSON.stringify([])),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    // Setup the API mocks
    (searchMovies as jest.Mock).mockResolvedValue(mockSearchResults);
    (getMovieDetails as jest.Mock).mockResolvedValue(mockMovieDetails);
  });

  test("should search for a movie, display results, and show details when a movie is clicked", async () => {
    render(<App />);

    // Verify initial state
    expect(screen.getByText(/Discover Movies/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Search for your favorite movies/i)
    ).toBeInTheDocument();

    // Find the search input and button
    const searchInput =
      screen.getByPlaceholderText(/Search for movies/i) ||
      screen.getByTestId("search-input");

    const searchButton = screen.getByLabelText("Search");
    // console.log('debug-search button',searchButton.ariaLabel);

    // Enter a search query and click search
    await userEvent.type(searchInput, "inception");
    fireEvent.click(searchButton);

    // Verify loading state appears
    expect(searchMovies).toHaveBeenCalledWith("inception", 1);

    // Wait for search results to appear
    await waitFor(() => {
      expect(screen.getByText(/Search Results \(2\)/i)).toBeInTheDocument();
    });

    // Verify search results are displayed
    expect(screen.getByText("Inception")).toBeInTheDocument();
    // expect(screen.getByText('The Matrix')).toBeInTheDocument();

    // Click on the first movie card
    const inceptionCard = screen.getByText("Inception").closest("div");
    if (inceptionCard) {
      fireEvent.click(inceptionCard);
    } else {
      throw new Error("Movie card not found");
    }

    // Verify API call for movie details
    expect(getMovieDetails).toHaveBeenCalledWith("tt1375666");

    // Wait for movie details to be displayed
    await waitFor(() => {
      expect(
        screen.getByText(/A thief who steals corporate secrets/i)
      ).toBeInTheDocument();
    });

    // Verify movie details
    expect(screen.getByText("Christopher Nolan")).toBeInTheDocument();
    expect(
      screen.getByText("Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page")
    ).toBeInTheDocument();

    // Test closing the details
    const closeButton =
      screen.getByLabelText(/Close/i) ||
      screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    // Verify details are closed
    await waitFor(() => {
      expect(
        screen.queryByText(/A thief who steals corporate secrets/i)
      ).not.toBeInTheDocument();
    });
  });

  test("should add and remove a movie from favorites", async () => {
    render(<App />);

    // Search for a movie
    const searchInput =
      screen.getByPlaceholderText(/Search for movies/i) ||
      screen.getByRole("input");
    const searchButton = screen.getByLabelText("Search");

    await userEvent.type(searchInput, "inception");
    fireEvent.click(searchButton);

    // Wait for results to load
    await waitFor(() => {
      expect(screen.getByText("Inception")).toBeInTheDocument();
    });

    // Find and click the favorite button
    const favoriteButtons =
      screen.getAllByLabelText(/Add to favorites/i) ||
      screen.getAllByRole("button", { name: /Add to favorites/i });
    fireEvent.click(favoriteButtons[0]);

    // Navigate to favorites tab
    const favoritesTab = screen.getByText(/Favorites/i);
    fireEvent.click(favoritesTab);

    // Verify movie is in favorites
    await waitFor(() => {
      expect(screen.getByText("Inception")).toBeInTheDocument();
    });

    // Remove from favorites
    const removeFavoriteButton =
      screen.getByLabelText(/Remove from favorites/i) ||
      screen.getByRole("button", { name: /Remove from favorites/i });
    fireEvent.click(removeFavoriteButton);

    // Verify favorites are empty
    await waitFor(() => {
      expect(
        screen.getByText(/Your favorites collection is empty/i)
      ).toBeInTheDocument();
    });
  });

  test("should handle API errors gracefully", async () => {
    // Mock API to return an error
    (searchMovies as jest.Mock).mockResolvedValue({
      Response: "False",
      Error: "Movie not found!",
    });

    render(<App />);

    // Search for a non-existent movie
    const searchInput =
      screen.getByPlaceholderText(/Search for movies/i) ||
      screen.getByRole("textbox");
    const searchButton = screen.getByLabelText("Search");

    await userEvent.type(searchInput, "xyznonexistentmovie");
    fireEvent.click(searchButton);

    // Verify error message is displayed
    await waitFor(() => {
      expect(screen.getByText("Movie not found!")).toBeInTheDocument();
    });
  });
});
