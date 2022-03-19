import { XIcon } from "@heroicons/react/solid";
import { Session } from "next-auth";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import Controls from "./Controls";
import Hero from "./Hero";
import { Movie, Tv } from "../types/interfaces";
const Info: React.FC<{ session: Session; movie?: Movie; tv?: Tv }> = ({
  session,
  movie,
  tv,
}) => {
  const [showPlayer, setShowPlayer] = useState(false);
  let MovieTrailerindex = movie?.videos?.results?.findIndex(
    (item) => item.type === "Trailer"
  );
  if (MovieTrailerindex === -1) {
    MovieTrailerindex = 0;
  }
  let tvShowTrailerIndex = tv?.videos?.results?.findIndex(
    (item) => item.type === "Trailer"
  );
  if (tvShowTrailerIndex === -1) {
    tvShowTrailerIndex = 0;
  }
  if (tv) {
    return (
      <div>
        {session ? (
          <div className="hhh relative">
            <Head>
              <title>{tv.name || tv.original_name}</title>
            </Head>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                tv?.poster_path || tv?.backdrop_path
              }`}
              layout="fill"
              objectFit="cover"
              alt=""
              className="z-[-1]"
            />
            <Controls
              key={tv?.id}
              movie={movie}
              tv={tv}
              togglePlayer={setShowPlayer}
            />
            {showPlayer && <div className="absolute bg-black/50 inset-0"></div>}
            {showPlayer && (
              <div className="absolute z-3  inset-10 top-24 md:top-0">
                <div className=" bg-black px-4 h-12 rounded-sm flex justify-between items-center border-2 border-opacity-50  border-gray-800">
                  <p className="text-white tracking-widest font-semibold">
                    Play Trailer
                  </p>
                  <div
                    className="bg-slate-700 bg-opacity-0 hover:bg-opacity-50 transition duration-300 cursor-pointer rounded-sm "
                    onClick={() => {
                      setShowPlayer(false);
                    }}
                  >
                    <XIcon className="h-5 text-white" />
                  </div>
                </div>
                <div className="text-white bg-black h-80 md:h-[90%]">
                  <ReactPlayer
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    url={`https://www.youtube.com/watch?v=${
                      tv.videos?.results?.[tvShowTrailerIndex || 0]?.key
                    }`}
                    playing={showPlayer}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Hero />
        )}
      </div>
    );
  }
  if (movie) {
    return (
      <div>
        {session ? (
          <div className="hhh relative">
            <Head>
              <title>{movie?.title}</title>
            </Head>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie?.poster_path || movie?.backdrop_path
              }`}
              layout="fill"
              objectFit="cover"
              alt=""
              className="z-[-1]"
            />
            <Controls
              key={movie?.id}
              movie={movie}
              togglePlayer={setShowPlayer}
            />
            {showPlayer && <div className="absolute bg-black/50 inset-0"></div>}
            {showPlayer && (
              <div className="absolute z-3  inset-10 top-24 md:top-0">
                <div className=" bg-black px-4 h-12 rounded-sm flex justify-between items-center border-2 border-opacity-50  border-gray-800">
                  <p className="text-white tracking-widest font-semibold">
                    Play Trailer
                  </p>
                  <div
                    className="bg-slate-700 bg-opacity-0 hover:bg-opacity-50 transition duration-300 cursor-pointer rounded-sm "
                    onClick={() => {
                      setShowPlayer(false);
                    }}
                  >
                    <XIcon className="h-5 text-white" />
                  </div>
                </div>
                <div className="text-white bg-black h-80 md:h-[90%]">
                  <ReactPlayer
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    url={`https://www.youtube.com/watch?v=${
                      movie.videos?.results?.[MovieTrailerindex || 0].key
                    }`}
                    playing
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Hero />
        )}
      </div>
    );
  } else {
    return <div>ERROR</div>;
  }
};
export default Info;
