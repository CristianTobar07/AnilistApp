"use client";

import Link from "next/link";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";
import { Movie } from "../interfaces/movies-response";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = (movieCard: MovieCardProps) => {
  const { id, coverImage, title, format, episodes, genres, status, meanScore } =
    movieCard.movie;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(movieCard.movie));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-48">
      <div className="flex flex-col bg-gray-800 rounded overflow-hidden">
        <div className="flex flex-col text-center  border-b">
          <Image
            key={id}
            src={coverImage.medium}
            width={130}
            height={80}
            alt={title.english}
            priority={false}
            style={{
              objectFit: "cover",
              borderRadius: "5px",
              width: "100%",
              height: "200px",
            }}
          />

          <p
            className="pt-2 text-sm font-semibold text-gray-50 capitalize anilist-title-text-large"
            title={title.english || title.native}
          >
            {title.english || title.native}
          </p>

          <hr />

          <p className="pt-2  text-gray-50 text-xs capitalize anilist-title-text-large">
            <span className="">Format: </span> <i>{format}</i>
          </p>
          <p className="pt-0  text-gray-50 text-xs capitalize anilist-title-text-large">
            <span className="">Episodies: </span> <i>{episodes}</i>
          </p>
          <p className="pt-0  text-gray-50 text-xs capitalize anilist-title-text-large">
            <span className="">Genres: </span>{" "}
            {genres.map((genre) => (
              <i key={genre}>
                {genre} <span>{` ,`}</span>
              </i>
            ))}
          </p>

          <p className="pt-0  text-gray-50 text-xs capitalize anilist-title-text-large">
            <span className="">Status: </span> <i>{status}</i>
          </p>

          <p className="pt-0  text-gray-50 text-xs capitalize anilist-title-text-large pb-2">
            <span className="">Score: </span> <i>{meanScore}</i>
          </p>

          <div className="mb-5">
            <Link
              href={`dashboard/movie/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More information
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
          >
            <div className="text-red-600">
              {isFavorite ? (
                <IoHeart size={25} />
              ) : (
                <IoHeartOutline size={25} />
              )}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-yellow-50 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
