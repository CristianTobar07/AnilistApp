"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormValues {
  movieToSearch: string;
}

export const SearchMovies = () => {
  const router = useRouter();

  const [formValues, setformValues] = useState<FormValues>({
    movieToSearch: "",
  });

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setformValues({ movieToSearch: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("title", formValues.movieToSearch);
    const newPathname = `/dashboard/movies/1`;
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <form className="flex flex-wrap gap-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="flex border w-full border-yellow-700 py-2 px-3 text-sm font-normal bg-gray-800 text-white rounded-sm lg:w-80 md:w-80"
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
