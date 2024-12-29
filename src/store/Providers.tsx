"use client";

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoriteMovie } from "./favorites/favorites";
import { setDataUser } from "./auth/authSlice";

interface Props {
  children: React.ReactNode;
}

// Configuration of provider to use Redux in the application
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    // Get favorites and information of user from local storage
    const favorites = localStorage.getItem("favorites-movies");
    const dataUser = JSON.parse(localStorage.getItem("dataUser") ?? "{}");
    store.dispatch(setFavoriteMovie(favorites ? JSON.parse(favorites) : []));
    store.dispatch(setDataUser(dataUser));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
