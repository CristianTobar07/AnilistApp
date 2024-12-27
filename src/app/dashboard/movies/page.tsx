import { MovieGrid, MoviesResponse } from "@/movies";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Anime",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

const getMovies = async (): Promise<MoviesResponse> => {
  try {
    const query = `
     query ($page: Int, $perPage: Int, $search: String) {
       Page (page: $page, perPage: $perPage) {
         pageInfo {
           currentPage
           hasNextPage
           perPage
         }
         media (search: $search) {
            id
            siteUrl
            format
            episodes
            genres
            coverImage {
              medium
            }
            title {
              english
              native
            }
            description
            status  
            meanScore
          }
        }
     }
     `;

    const variables = {
      search: "dbz",
      page: 1,
      perPage: 12,
    };

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };

    const animes = fetch(url, options).then((resp) => resp.json());

    return animes;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonsPage() {
  const responseMovies = await getMovies();

  return (
    <div className="flex flex-col">
      <span className="text-2xl my-2">
        Listado de Pokémons <small className="text-blue-500">estático</small>
      </span>

      <MovieGrid movies={responseMovies.data.Page.media} />
    </div>
  );
}
