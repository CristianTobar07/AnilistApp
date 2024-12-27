import httpClient from "@/app/graphql/config";
import { moviesQuery } from "@/app/graphql/querys/MoviesQuery";
import { MovieGrid, MoviesResponse } from "@/movies";
import Link from "next/link";

export const metadata = {
  title: "Movies",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

const getMovies = async (page: number): Promise<MoviesResponse> => {
  const variables = { page };
  const response = await httpClient.request<MoviesResponse>(
    moviesQuery,
    variables
  );
  return response;

  // try {
  //   const query = `
  //    query ($page: Int, $search: String) {
  //      Page (page: $page) {
  //        pageInfo {
  //          currentPage
  //          hasNextPage
  //          perPage
  //        }
  //        media (search: $search) {
  //           id
  //           siteUrl
  //           format
  //           episodes
  //           genres
  //           coverImage {
  //             extraLarge
  //           }
  //           title {
  //             english
  //             native
  //           }
  //           description
  //           status
  //           meanScore
  //         }
  //       }
  //    }
  //    `;

  //   const variables = {
  //     search: "dbz",
  //     page: 1,
  //   };

  //   const url = "https://graphql.anilist.co",
  //     options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         query: query,
  //         variables: variables,
  //       }),
  //     };

  //   const animes = fetch(url, options).then((resp) => resp.json());

  //   return animes;
  // } catch (error) {
  //   throw error;
  // }
};

export default async function MoviesPage({
  params,
}: {
  params: { page: string };
}) {
  const page = parseInt(params.page) || 1;

  const responseMovies = await getMovies(page);

  return (
    <div className="flex flex-col">
      <span className="text-2xl my-2">
        Listado de Pokémons <small className="text-blue-500">estático</small>
      </span>

      <MovieGrid movies={responseMovies.Page.media} />

      <div className="flex my-3  w-full justify-center">
        <Link
          href={`/dashboard/movies/${page - 1}`}
          className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
            page === 1 && "anilist_block_button"
          }`}
        >
          Back
        </Link>
        <Link
          href={`/dashboard/movies/${page + 1}`}
          className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
            responseMovies.Page.media.length < 50 && "anilist_block_button"
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
