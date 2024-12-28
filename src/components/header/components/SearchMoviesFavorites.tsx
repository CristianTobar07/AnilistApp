"use client";

import { useAppDispatch } from "@/store";
import { searchFavoritesMovies } from "@/store/favorites/favorites";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormValues {
  movieToSearch: string;
}

export const SearchMoviesFavorites = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formValues, setformValues] = useState<FormValues>({
    movieToSearch: "",
  });

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setformValues({ movieToSearch: e.target.value });
    dispatch(searchFavoritesMovies(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-wrap gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="lex border w-full border-yellow-700 py-2 px-3 text-sm font-normal bg-gray-800 text-white rounded-sm lg:w-80 md:w-80"
        placeholder="Search movies"
        onChange={(e) => handleChangeForm(e)}
      />

      <button
        type="submit"
        className="w-full bg-yellow-700 px-4 py-2 rounded-sm text-sm lg:w-32 md:w-32"
      >
        Search
      </button>
    </form>
  );
};
