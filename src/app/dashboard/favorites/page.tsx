import { HeaderMoviesFavorites } from "@/components/header";
import { FavoritePokemons } from "@/components/movies";

export const metadata = {
  title: "Favoritos",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col h-screen ml-2">
      <HeaderMoviesFavorites />
      <FavoritePokemons />
    </div>
  );
}
