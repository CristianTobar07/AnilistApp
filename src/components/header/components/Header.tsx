"use client";

import React from "react";
import { SearchMovies } from "./SearchMovies";
import { InfoUser } from "./InfoUser";
import { Auth } from "./Auth";
import { RootState, useAppSelector } from "@/store";

export const Header = () => {
  const { dataUser } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <div className="flex flex-wrap gap-3 bg-gray-800 mx-1 py-3 mb-1 px-2 text-white flex-col-reverse lg:flex-row sm:items-end  lg:justify-between">
      <SearchMovies />
      {dataUser?.name ? <InfoUser userName={dataUser.name} /> : <Auth />}
    </div>
  );
};
