import { Movie } from "@/components/movies";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface favoritesState {
  moviesOrg: Movie[];
  movies: Movie[];
}

const initialState: favoritesState = {
  moviesOrg: [],
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoriteMovie(state, action: PayloadAction<Movie[]>) {
      state.moviesOrg = action.payload;
      state.movies = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const { id } = movie;

      const movieExist = state.movies.find((movie) => movie.id === id);

      if (movieExist) {
        state.movies = state.movies.filter((movie) => movie.id !== id);
      } else {
        state.movies.unshift(action.payload);
      }

      localStorage.setItem("favorites-movies", JSON.stringify(state.movies));
    },
    searchFavoritesMovies(state, action: PayloadAction<string>) {
      state.movies = state.moviesOrg.filter(
        (movie) =>
          movie.title.english
            ?.toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase()) ||
          movie.title.native
            ?.toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
      );
    },
  },
});

export const { toggleFavorite, setFavoriteMovie, searchFavoritesMovies } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
