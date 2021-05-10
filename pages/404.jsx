import Head from "next/head";
import OopsPage from "../components/oops.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Orbits</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <OopsPage msg="no such page exists, guess you got lost..." />
    </div>
  );
}
