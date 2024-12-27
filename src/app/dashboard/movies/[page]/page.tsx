import httpClient from "@/app/graphql/config";
import { moviesQuery } from "@/app/graphql/querys/MoviesQuery";
import { Header } from "@/components/header/Header";
import { MovieGrid, MoviesResponse } from "@/movies";
import Link from "next/link";

export const metadata = {
  title: "Movies",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

const getMovies = async (
  page: number,
  title?: string
): Promise<MoviesResponse> => {
  const variables = title ? { page, search: title } : { page };

  const response = await httpClient.request<MoviesResponse>(
    moviesQuery,
    variables
  );
  return response;
};

export default async function MoviesPage({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { title?: string };
}) {
  const page = parseInt(params.page) || 1;
  const titleMovie = searchParams.title || "";

  const responseMovies = await getMovies(page, titleMovie);

  return (
    <div className="flex flex-col">
      <Header />

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
