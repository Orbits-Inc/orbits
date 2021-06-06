import Head from "next/head";
import Page404 from "../components/PageAssets/page404.component";

export default function NotFound() {
  return (
    <main>
      <Head>
        <title>Orbits</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Page404 message="No such page exists, guess you got lost..." />
    </main>
  );
}
