//typing the tmdb response objects
// fist response object
/**
poular Movies 
*/

export interface PopularMovies {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface PopularMoviesRsponse {
  page: number;
  results: PopularMovies[];
  total_pages: number;
  total_results: number;
}

export interface PopularShows {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
export interface PopularShowsResponse {
  page: number;
  results: PopularMovies[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface TopRatedMoviesResponse {
  page: number;
  results: TopRatedMovies[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedShows {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface TopRatedShowsResponse {
  page: number;
  results: TopRatedShows[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (): Promise<
  [
    PopularMoviesRsponse,
    PopularShowsResponse,
    TopRatedMoviesResponse,
    TopRatedShowsResponse
  ]
> => {
  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ),
    ]);
  const [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
  ]: [
    PopularMoviesRsponse,
    PopularShowsResponse,
    TopRatedMoviesResponse,
    TopRatedShowsResponse
  ] = await Promise.all([
    popularMovies.json(),
    popularShows.json(),
    topRatedMovies.json(),
    topRatedShows.json(),
  ]);
  return [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
  ];
};
