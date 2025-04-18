import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, page: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSearch(query, 1);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative flex items-center xs:w-full lg:w-[40%] mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies ..."
          data-testid="search-input"
          className="w-full py-4 pl-12 pr-24 bg-black/60 border border-gray-800 rounded-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-lg"
          aria-label="Search for movies"
        />

        <button
          type="submit"
          className="absolute right-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Search"
          aria-roledescription="search"
        >
          <div className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
