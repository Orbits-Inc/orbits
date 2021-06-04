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
            <meta property="og:url" content="https://metatags.io/" />
            <meta
              property="og:title"
              content="Orbits - Research | Learn | Share"
            />
            <meta
              property="og:description"
              content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
            />
            <meta
              property="og:image"
              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
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
              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
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
