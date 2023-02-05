import Head from "next/head";
import Login from "../components/Login";
import { getSession, useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <LeftSidebar />
        <RightSidebar />
        <Feed />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
