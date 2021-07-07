import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { PopupProvider } from "../utils/providers/popup.provider";
import { AuthProvider } from "../utils/providers/auth.provider";
import { ApiProvider } from "../utils/providers/api.provider";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import React from "react";
import { OnboardingProvider } from "../sections/Onboarding/providers/onboarding.provider";

const progress = new ProgressBar({
  size: 2,
  color: "#347efd",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <ApiProvider>
        <PopupProvider>
          <OnboardingProvider>
            <>
              <Head>
                <title>Orbits</title>
                <link rel="shortcut icon" href="./favicon.png" />
                <meta
                  name="title"
                  content="Orbits - Research | Learn | Share"
                />
                <meta
                  name="description"
                  content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
                />

                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content="https://orbits-theta.vercel.app/"
                />
                <meta
                  property="og:title"
                  content="Orbits - Research | Learn | Share"
                />
                <meta
                  property="og:image:alt"
                  content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
                />
                <meta
                  property="og:description"
                  content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
                />
                <meta property="og:image" content="/Orbits-Banner.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                  property="twitter:url"
                  content="https://orbits-theta.vercel.app/"
                />
                <meta
                  property="twitter:title"
                  content="Orbits - Research | Learn | Share"
                />
                <meta
                  property="twitter:description"
                  content="Researching, Exploring, and Sharing makes a day worthy, make it easier with Orbits."
                />
                <meta property="twitter:image" content="/Orbits-Banner.png" />

                <link rel="manifest" href="/manifest.json" />
                <link
                  href="/favicon.png"
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                />
                <link
                  href="/favicon.png"
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/favicon.png"></link>
                <meta name="theme-color" content="#3763ff" />
              </Head>
              <div>
                <Component {...pageProps} />
              </div>
            </>
          </OnboardingProvider>
        </PopupProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default MyApp;
