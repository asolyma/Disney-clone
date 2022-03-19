import { PlayIcon, PlusIcon } from "@heroicons/react/solid";
import { Dispatch, SetStateAction, useState } from "react";
import { Movie, Tv } from "../types/interfaces";

const Controls: React.FC<{
  movie?: Movie;
  tv?: Tv;
  togglePlayer: Dispatch<SetStateAction<boolean>>;
}> = ({ movie, togglePlayer, tv }) => {
  if (tv) {
    return (
      <div className="text-white absolute bottom-[50%] md:bottom-28 md:left-10 sm:p-1 md:p-2">
        <h1 className="text-4xl font-bold p-2 mt-10 md:text-6xl">
          {tv?.name || tv?.original_name}
        </h1>
        <div className="flex p-2 space-x-2 md:space-x-5 items-center">
          <button className="bg-white/80 flex space-x-3 items-center justify-center text-black  rounded-md py-2 px-4 ">
            <PlayIcon className="h-8" />
            <span className=" tracking-wide  md:text-base">PLAY</span>
          </button>
          <button
            onClick={() => {
              togglePlayer(true);
            }}
            className="bg-slate-800 opacity-25 hover:opacity-70 flex space-x-3 items-center justify-center text-white  rounded-md py-2 px-4  border-2 border-opacity-50"
          >
            <PlayIcon className="h-8" />
            <span className="tracking-wide md:text-base">Trailer</span>
          </button>
          <div className="rounded-full border-2 h-11 w-11 border-white flex items-center justify-center bg-black/60 cursor-pointer">
            <PlusIcon className="h-8" />
          </div>
          <div className="h-11 w-11 rounded-full border-2 cursor-pointer">
            <img className="object-cover" src="/images/group-icon.svg" alt="" />
          </div>
        </div>
        <p className="text-sm p-2 md:text-[18px] text-gray-200 font-bold">
          {tv.first_air_date} . {Math.floor(tv.episode_run_time[0] / 60)}h{" "}
          {tv.episode_run_time[0] % 60}m .{" "}
          {tv.genres?.map((genre) => genre.name + " ")}
        </p>
        <div className="px-4 text-justify text-sm text-white max-w-[400px] md:max-w-[600px]">
          <h4 className="">{tv.overview}</h4>
        </div>
      </div>
    );
  }
  if (movie) {
    return (
      <div className="text-white absolute md:bottom-28 md:left-10 sm:p-1 md:p-2">
        <h1 className="text-4xl font-bold p-2 mt-10 md:text-6xl">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="flex p-2 space-x-2 md:space-x-5 items-center">
          <button className="bg-white/80 flex space-x-3 items-center justify-center text-black  rounded-md py-2 px-4 ">
            <PlayIcon className="h-8" />
            <span className=" tracking-wide  md:text-base">PLAY</span>
          </button>
          <button
            onClick={() => {
              togglePlayer(true);
            }}
            className="bg-slate-800 opacity-25 hover:opacity-70 flex space-x-3 items-center justify-center text-white  rounded-md py-2 px-4  border-2 border-opacity-50"
          >
            <PlayIcon className="h-8" />
            <span className="tracking-wide md:text-base">Trailer</span>
          </button>
          <div className="rounded-full border-2 h-11 w-11 border-white flex items-center justify-center bg-black/60 cursor-pointer">
            <PlusIcon className="h-8" />
          </div>
          <div className="h-11 w-11 rounded-full border-2 cursor-pointer">
            <img className="object-cover" src="/images/group-icon.svg" alt="" />
          </div>
        </div>
        <p className="text-sm p-2 md:text-[18px] text-gray-200 font-bold">
          {movie?.release_date} . {Math.floor(movie.runtime / 60)}h{" "}
          {movie.runtime % 60}m .{" "}
          {movie.genres?.map((genre) => genre.name + " ")}
        </p>
        <div className="px-4 text-justify text-sm text-white max-w-[400px] md:max-w-[600px]">
          <h4 className="">{movie.overview}</h4>
        </div>
      </div>
    );
  }
};
export default Controls;
