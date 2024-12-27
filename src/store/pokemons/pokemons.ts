import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "@/pokemons";

interface PokemonsState {
  favorites: { [key: string]: Movie };
}

const initialState: PokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: Movie }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const { id } = movie;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = movie;
      }

      //TODO: No se debe de hacer en Redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
