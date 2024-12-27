"use client";

import { useParams } from "next/navigation";
import { Movie } from "../interfaces/movies-response";
import { MovieCard } from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}
export const MovieGrid = (props: MovieGridProps) => {
  const params = useParams();

  if (params.page) {
    localStorage.setItem("paramsMovies", params.page);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {props.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
