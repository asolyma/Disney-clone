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
import { Movie, Tv } from "../../types/interfaces";
const Movies: NextPage<{ session: Session; tv?: Tv }> = ({ session, tv }) => {
  return (
    <div>
      <Header session={session} />
      <Info session={session} tv={tv} />
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
    const tvShowResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${ctx.query.id}?api_key=c72b5ebbd8af45a6f9dfc7e6a7b806ec&language=en-US&append_to_response=videos`
    );
    const tv: Tv = await tvShowResponse.json();
    return {
      props: { tv, session },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { session },
    };
  }
};
