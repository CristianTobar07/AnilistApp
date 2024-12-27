import React from "react";
import { SearchMovies } from "./SearchMovies";

export const Header = () => {
  return (
    <div className="flex flex-grow bg-gray-900 mx-1 py-3 px-2 text-white">
      <SearchMovies />
    </div>
  );
};
