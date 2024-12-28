"use client";

import { Movie } from "../interfaces/movies-response";
import { MovieCard } from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}
export const MovieGrid = (props: MovieGridProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
