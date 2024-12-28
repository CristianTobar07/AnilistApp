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
    <form className="flex w-96 gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="flex border w-full border-yellow-700 py-2 px-3 text-sm font-normal bg-gray-800 text-white rounded-sm"
        placeholder="Search movies"
        onChange={(e) => handleChangeForm(e)}
      />

      <button type="submit" className="bg-yellow-700 px-4 rounded-sm text-sm">
        Search
      </button>
    </form>
  );
};
