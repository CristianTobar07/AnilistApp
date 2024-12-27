import { SimpleMovieResponse } from "@/movies";
import BanerBagroundMovie from "@/movies/components/BanerBagroundMovie";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IoArrowBack,
  IoChevronBackOutline,
  IoPlayOutline,
} from "react-icons/io5";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const responseMovie = await getMovie(+params.id);
    const { id, title } = responseMovie.data.Page.media[0];

    return {
      title: `#${id} - ${title}`,
      description: `Movie page ${title}`,
    };
  } catch (error) {
    return {
      title: "Página del pokémon",
      description:
        "Culpa cupidatat ipsum magna reprehenderit ex tempor sint ad minim reprehenderit consequat sit.",
    };
  }
}

const getMovie = async (id: number): Promise<SimpleMovieResponse> => {
  try {
    const query = `
    query ($id: Int!) {
      Page {
        media(id: $id) {
          id
          format
          episodes
          genres
          coverImage {
            extraLarge
            color
          }
          meanScore
          title {
            english
            native
          }
          description
          status
          endDate {
            day
            month
            year
          }
          season
          duration
          bannerImage
        }
      }
    }
  `;

    const variables = {
      id: id,
    };

    const url = "https://graphql.anilist.co",
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

    const movie = fetch(url, options).then((resp) => resp.json());

    return movie;
  } catch (error) {
    notFound();
  }
};

export default async function MoviesPage({ params }: Props) {
  const responseMovie = await getMovie(+params.id);
  const {
    title,
    coverImage,
    description,
    meanScore,
    endDate,
    season,
    duration,
    genres,
    bannerImage,
  } = responseMovie.data.Page.media[0];

  console.log({ endDate });

  return (
    <div className="flex flex-col items-center text-slate-800">
      {bannerImage ? (
        <Image
          src={bannerImage}
          height={1000}
          width={1000}
          alt={`Imagen del pokemon ${title.english}`}
          className="mb-5"
          style={{
            width: "78%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            filter: "contrast(50%) brightness(50%)",
          }}
        />
      ) : (
        <BanerBagroundMovie color={coverImage.color} />
      )}

      <div className="relative w-full">
        <Link
          href={"dashboard/movies"}
          className="flex w-full justify-start my-3 text-white"
        >
          <IoChevronBackOutline size={40} />
        </Link>

        <div className="relative" style={{ marginTop: "-20px" }}>
          <div className="flex flex-wrap w-full justify-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <div>
                <Image
                  src={coverImage.extraLarge}
                  width={180}
                  height={150}
                  alt={`Imagen del pokemon ${title.english}`}
                />

                <button className="flex bg-yellow-400 w-full text-sm mt-1 font-semibold p-2 align-middle items-center gap-2 rounded-s-sm text-center justify-center">
                  <span>Official Trailer</span>
                  <IoPlayOutline size={15} />
                </button>
              </div>
            </div>

            <div className="text-white max-w-screen-sm text-xl font-bold capitalize">
              <h1 className="">
                {`${title.english || title.native} (${endDate.year})`}
              </h1>
              <div className="w-full justify-between font-thin text-xs">
                <span>Duration: </span> <span>{duration}h</span>
              </div>
              <h1 className="text-xl mt-4">OverView</h1>
              <p className="text-sm mt-1 font-thin">{description}</p>

              <div className="flex flex-wrap items-center gap-1 mt-4">
                <span className="text-sm">Score: </span>
                <span className="text-sm font-thin">{meanScore}</span>
              </div>

              <div className="flex flex-wrap items-center gap-1 mt-1">
                <span className="text-sm">Season: </span>
                <span className="text-sm font-thin">{season}</span>
              </div>

              <div className="items-center mt-1">
                <span className="text-sm">categories: </span>

                <div className="flex flex-wrap font-normal mt-2">
                  {genres.map((genre) => (
                    <div
                      key={genre}
                      className="mr-2 capitalize px-3 py-1 m-1 rounded-lg border border-yellow-500 text-yellow-400 text-xs"
                    >
                      {genre}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="text-base font-medium text-navy-700 flex">
                {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}


            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="text-base font-medium text-navy-700 flex">
                {pokemon.weight}
              </span>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Regular Sprites</p>
              <div className="flex justify-center">
                <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`} 
                 />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Shiny Sprites</p>
              <div className="flex justify-center">
                <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
