import Head from "next/head";
import Page404 from "../components/PageAssets/page404.component";
import SignIn from "../components/PageAssets/signin.component";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Orbits</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SignIn />
      <Page404 message="No such page exists, guess you got lost..." />
    </main>
  );
}
