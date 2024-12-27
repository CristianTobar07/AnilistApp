import httpClient from "@/graphql/config";
import { MovieQuery } from "@/graphql/querys/MovieQuery";
import { SimpleMovieResponse } from "@/movies";
import BackButton from "@/movies/components/BackButton";
import BanerBagroundMovie from "@/movies/components/BanerBagroundMovie";
import { Metadata } from "next";
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const responseMovie = await getMovie(+params.id);
    const { title } = responseMovie.Page.media[0];

    return {
      title: `${title.english || title.native}`,
      description: `Movie page ${title}`,
    };
  } catch (error) {
    return {
      title: "Movie",
      description:
        "Description movie",
    };
  }
}

const getMovie = async (id: number): Promise<SimpleMovieResponse> => {
  const variables = { id };
  const response = await httpClient.request<SimpleMovieResponse>(
    MovieQuery,
    variables
  );
  return response;
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
  } = responseMovie.Page.media[0];

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
        <BackButton />

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
        </div>
      </div>
    </div>
  );
}
