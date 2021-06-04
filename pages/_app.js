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
            <title>Orbits</title>
            <meta name="title" content="Orbits - Research | Learn | Share" />
            <meta
              name="description"
              content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://orbits-theta.vercel.app/" />
            <meta
              property="og:title"
              content="Orbits - Research | Learn | Share"
            />
            <meta property="og:image:alt" content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."/>
            <meta
              property="og:description"
              content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
            />
            <meta
              property="og:image"
              content="/Orbits-Banner.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://orbits-theta.vercel.app/" />
            <meta
              property="twitter:title"
              content="Orbits - Research | Learn | Share"
            />
            <meta
              property="twitter:description"
              content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
            />
            <meta
              property="twitter:image"
              content="/Orbits-Banner.png"
            />
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
