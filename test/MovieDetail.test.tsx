import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetail from "../src/components/MovieDetail";

// Mock movie data
const mockMovie = {
  Title: "Test Movie",
  Year: "2023",
  Rated: "PG-13",
  Released: "01 Jan 2023",
  Runtime: "120 min",
  Genre: "Action",
  Director: "Test Director",
  Writer: "Test Writer",
  Actors: "Actor 1, Actor 2",
  Plot: "Test plot description",
  Language: "English",
  Country: "USA",
  Awards: "None",
  Poster: "test-poster.jpg",
  Ratings: [],
  Metascore: "75",
  imdbRating: "7.5",
  imdbVotes: "1000",
  imdbID: "tt1234567",
  Type: "movie",
  DVD: "01 Feb 2023",
  BoxOffice: "$1,000,000",
  Production: "Test Production",
  Website: "N/A",
  Response: "True",
};

// Mock functions
const mockOnClose = jest.fn();
const mockToggleFavorite = jest.fn();

// Base props
const defaultProps = {
  movie: mockMovie,
  onClose: mockOnClose,
  isFavorite: false,
  toggleFavorite: mockToggleFavorite,
  isLoading: false,
};

describe("MovieDetail Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state correctly", () => {
    render(<MovieDetail {...defaultProps} isLoading={true} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders movie details correctly", () => {
    render(<MovieDetail {...defaultProps} />);

    // Check for basic movie information
    expect(screen.getByText(mockMovie.Title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.Director)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.Plot)).toBeInTheDocument();
  });

  it("handles escape key press", () => {
    jest.useFakeTimers();

    render(<MovieDetail {...defaultProps} />);

    fireEvent.keyDown(window, { key: "Escape" });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockOnClose).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("handles backdrop click", () => {
    jest.useFakeTimers();

    render(<MovieDetail {...defaultProps} />);

    const backdrop = screen.getByTestId("dialog");
    fireEvent.click(backdrop);

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockOnClose).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("prevents modal close when clicking inside modal content", () => {
    render(<MovieDetail {...defaultProps} />);

    const modalContent = screen.getByTestId("dialog").children[0];
    fireEvent.click(modalContent);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it("handles favorite toggle", () => {
    render(<MovieDetail {...defaultProps} />);

    const favoriteButton = screen.getByRole("button", { name: /favorite/i });
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalled();
  });

  it("displays placeholder image when poster is N/A", () => {
    const movieWithoutPoster = {
      ...mockMovie,
      Poster: "N/A",
    };

    render(<MovieDetail {...defaultProps} movie={movieWithoutPoster} />);

    const posterImage = screen.getByTestId("movie-poster");
    expect(posterImage).toHaveAttribute("src", "https://placehold.co/300x450");
  });

  it("displays correct IMDb rating", () => {
    render(<MovieDetail {...defaultProps} />);

    const rating = screen.getByText("7.5/10");
    expect(rating).toBeInTheDocument();
  });

  it("handles animation on mount", () => {
    render(<MovieDetail {...defaultProps} />);

    const modal = screen.getByTestId("dialog");
    expect(modal).toHaveClass("opacity-100");
    expect(modal.children[0]).toHaveClass("scale-100");
  });
});
