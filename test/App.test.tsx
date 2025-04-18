import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import App from "../src/App";

describe("App Component Unit Tests", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<App />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  test("renders main heading", (): void => {
    const heading: HTMLElement = screen.getByText("Movie Explorer");
    expect(heading).toBeInTheDocument();
  });

  test("renders title", (): void => {
    const welcomeMessage: HTMLElement = screen.getByText("Discover Movies");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders subtitle", (): void => {
    const welcomeMessage: HTMLElement = screen.getByText(
      "Search for your favorite movies and build your collection."
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("shows start search prompts when movies array is empty and not loading", (): void => {
    const noMoviesMessage: HTMLElement = screen.getByText(
      "Search for movies to get started"
    );
    expect(noMoviesMessage).toBeInTheDocument();
  });
});
