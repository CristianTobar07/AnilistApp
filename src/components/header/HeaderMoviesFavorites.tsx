"use client";

import React from "react";
import { InfoUser } from "./InfoUser";
import { Auth } from "./Auth";
import { RootState, useAppSelector } from "@/store";
import { SearchMoviesFavorites } from "./SearchMoviesFavorites";

export const HeaderMoviesFavorites = () => {
  const { dataUser } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <div className="flex flex-grow bg-gray-900 mx-1 py-3 px-2 text-white justify-between ">
      <SearchMoviesFavorites />
      {dataUser?.name ? <InfoUser userName={dataUser.name} /> : <Auth />}
    </div>
  );
};
