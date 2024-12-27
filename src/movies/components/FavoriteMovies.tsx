"use client";

import { useAppSelector } from "@/store";
import { MovieGrid } from "./MovieGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoriteMovies = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return (
    <>
      {favoriteMovies.length === 0 ? (
        <NoFavorites />
      ) : (
        <MovieGrid movies={favoriteMovies} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
