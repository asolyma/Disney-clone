import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import {
  fetchMovies,
  PopularMoviesRsponse,
  PopularShowsResponse,
  TopRatedMoviesResponse,
} from "../lib/tmdb";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import { HomeProps } from "../types/interfaces";

const Home: NextPage<HomeProps> = ({
  session,
  popularMoviesRes,
  popularShowsRes,
  topRatedMoviesRes,
  topRatedShowsRes,
}) => {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Disney+</title>
      </Head>
      <div>
        <Header session={session} />
        {session ? (
          <main className="bg-backgroundImage	bg-cover mb-10 scrollbar-hide">
            <Slider />
            <Brands />
            <div className="">
              <Collection
                title={"Popular Movies"}
                response={popularMoviesRes}
              />
              <Collection title={"Popular Shows"} response={popularShowsRes} />
              <Collection title={"Top Movies"} response={topRatedMoviesRes} />
              <Collection title={"Top Shows"} response={topRatedShowsRes} />
            </div>
          </main>
        ) : (
          <Hero />
        )}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {
        session: null,
      },
    };
  }
  try {
    const [
      popularMoviesRes,
      popularShowsRes,
      topRatedMoviesRes,
      topRatedShowsRes,
    ] = await fetchMovies();
    return {
      props: {
        session,
        popularMoviesRes,
        popularShowsRes,
        topRatedMoviesRes,
        topRatedShowsRes,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { session },
    };
  }

  // ...
};
