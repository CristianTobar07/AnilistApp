"use client";

import React from "react";
import { moviesCategories } from "../constants/FilterByCategories";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { changeCategorieSelected } from "@/store/sidebar/sidebarSlice";
import { useRouter } from "next/navigation";
import { MovieCategory } from "../interfaces/FilterByCategories";

export const FilterByCategories = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { categorieSelected } = useAppSelector((state: RootState) => {
    return state.sidebar;
  });

  const handleSelectCategorie = (category: MovieCategory) => {
    dispatch(changeCategorieSelected(category));
    
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("category", category.name);
    const newPathname = `/dashboard/movies/1`; 
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div className="my-2 px-5">
      <h1 className="my-2">Categories</h1>
      <div className="flex flex-wrap font-normal mb-5">
        {moviesCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelectCategorie(category)}
            className={`mr-2 capitalize px-3 py-1 m-1 rounded-lg border border-yellow-500 text-yellow-400 text-xs cursor-auto active:opacity-5 ${
              categorieSelected && categorieSelected.id === category.id
                ? "bg-yellow-700 text-white font-semibold"
                : ""
            }`}
          >
            <span className="cursor-auto">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
