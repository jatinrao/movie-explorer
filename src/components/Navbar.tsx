import React from "react";

interface NavbarProps {
  activeTab: "search" | "favorites";
  setActiveTab: (tab: "search" | "favorites") => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-primary-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Movie Explorer</h1>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "search"
                  ? "bg-white text-primary-600 font-medium text-[#000]"
                  : "hover:bg-primary-500"
              }`}
              onClick={() => setActiveTab("search")}
            >
              Search
            </button>
            <button
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "favorites"
                  ? "bg-white text-primary-600 font-medium text-[#000]"
                  : "hover:bg-primary-500"
              }`}
              onClick={() => setActiveTab("favorites")}
            >
              Favorites
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
