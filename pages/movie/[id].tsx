import { PlayIcon, PlusIcon } from "@heroicons/react/solid";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Info from "../../components/Info";
import { Movie } from "../../types/interfaces";
const Movies: NextPage<{ movie: Movie; session: Session }> = ({
  movie,
  session,
}) => {
  return (
    <div>
      <Header session={session} />
      <Info session={session} movie={movie} />
    </div>
  );
};
export default Movies;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: { session },
    };
  }
  try {
    const movieresponse = await fetch(
      `https://api.themoviedb.org/3/movie/${ctx.query.id}?api_key=c72b5ebbd8af45a6f9dfc7e6a7b806ec&language=en-US&append_to_response=videos`
    );
    const movie: Movie = await movieresponse.json();
    return {
      props: { movie, session },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { session },
    };
  }
};
