"use client";

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";
import { setDataUser } from "./auth/authSlice";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    const dataUser = JSON.parse(
      localStorage.getItem("dataUser") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
    store.dispatch(setDataUser(dataUser));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
