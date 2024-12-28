import { HeaderMoviesFavorites } from "@/components/header/HeaderMoviesFavorites";
import { FavoritePokemons } from "@/movies";

export const metadata = {
  title: "Favoritos",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <HeaderMoviesFavorites />
      <FavoritePokemons />
    </div>
  );
}
