import Image from "next/image";
import {
  PopularMoviesRsponse,
  PopularShowsResponse,
  TopRatedMoviesResponse,
  TopRatedShowsResponse,
} from "../lib/tmdb";
import router from "next/router";
export interface CollectionProps {
  title: string;
  response:
    | PopularMoviesRsponse
    | PopularShowsResponse
    | TopRatedMoviesResponse
    | TopRatedShowsResponse;
}
const Collection: React.FC<CollectionProps> = ({ title, response }) => {
  return (
    <div>
      <h2 className=" ml-4 font-montserrat font-bold p-2 text-white">
        {title}
      </h2>
      <div className="flex space-x-6 overflow-x-scroll mx-5 scrollbar-hide p-2 cursor-pointer">
        {response?.results.map((item) => {
          return (
            <div
              onClick={() => {
                title.includes("Movies")
                  ? router.push(`/movie/${item.id}`)
                  : router.push(`/tv/${item.id}`);
              }}
              key={item.id}
              className=" flex min-w-[330px] min-h-[210px] border-4 border-white border-opacity-10 mx-auto rounded-lg hover:border-opacity-50 transform hover:scale-105 transition duration-300  "
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  item.poster_path || item.backdrop_path
                }`}
                width={330}
                height={210}
                alt={item.title}
                objectFit={"cover"}
                className="rounded-lg"
              />
            </div>
          );
        })}
        {/* <div className="bg-gradient-to-l from-[#0a2b3896]  w-1/12 absolute top-0 righ-0 h-full" /> */}
      </div>
    </div>
  );
};

export default Collection;
