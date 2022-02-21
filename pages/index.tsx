import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";
const Home: NextPage<{ session: Session | null }> = ({ session }) => {
  return (
    <div>
      <Head>
        <title>Disney+</title>
      </Head>
      <Header session={session} />
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  return {
    props: { session },
  };
  // ...
};
