import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { PopupProvider } from "../utils/providers/popup.provider";
import { AuthProvider } from "../utils/providers/auth.provider";
import { ApiProvider } from "../utils/providers/api.provider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ApiProvider>
        <PopupProvider>
          <Head>
            <meta
              name="description"
              content="Researching, Exploring and Sharing makes a day worthy, make it easier with Orbits."
            />
            <meta name="title" content={`Orbits`} />
            <meta name="image" content="/Orbits-Banner.png" />
            <meta property="og:title" content={`Orbits`} />
            <meta
              property="og:description"
              content="Researching, Exploring and Sharing makes a day worthy, make it easier with Orbits."
            />
            <meta property="og:image" content="/Orbits-Banner.png" />
            <title>Orbits</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <div>
            <Component {...pageProps} />
          </div>
        </PopupProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default MyApp;
