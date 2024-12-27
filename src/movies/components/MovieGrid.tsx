import { Movie } from "../interfaces/movies-response";
import { MovieCard } from "./MovieCard";


interface MovieGridProps {
  movies: Movie[];
}
export const MovieGrid = (movies: MovieGridProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {movies.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
