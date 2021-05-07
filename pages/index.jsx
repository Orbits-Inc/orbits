import Head from "next/head";
import Navbar from "../components/navbar.component";
import CustomInput from "../components/custominput.component";
import CustomButton from "../components/custombutton.component";
import { useState } from "react";
import addEmail from "../utils/add_email.js";
import { useToasts } from "react-toast-notifications";
export default function Home() {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Science, space & tech is what all we talk and write about!"
        />
        <meta name="title" content={`Orbits`} />
        <meta name="image" content="/favicon.png" />
        <meta property="og:title" content={`Orbits`} />
        <meta
          property="og:description"
          content="Science, space & tech is what all we talk and write about!"
        />
        <meta property="og:image" content="/favicon.png" />
        <title>Orbits</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main class="overflow-x-hidden lg:overflow-hidden md:overflow-hidden">
        <div
          id="level-1"
          className="relative h-screen p-6 py-3 lg:py-none md:py-none lg:px-20 md:px-20 text-primary"
        >
          <Navbar />
          <div
            id="child"
            className="hidden lg:flex md:flex lg:justify-evenly md:justify-evenly w-11/12 lg:mt-24 md:mt-28"
          >
            <div className="">
              <div className="font-black text-center lg:text-left md:text-left lg:text-7xl md:text-5xl mx-auto lg:mx-0 md:mx-0 lg:mr-12 md:mr-12 text-4xl pt-4">
                <div class="tagline mb-2 pt-2">Research.</div>Write.
                <br />
                Spread.
              </div>
              <div className="font-semibold text-center lg:text-left md:text-left text-accent mx-auto lg:mx-0 md:mx-0 py-8">
                Science, space & tech is what all we talk and write about!
              </div>
              <CustomButton
                title="Coming Soon"
                classextend="glow bg-secondary text-white font-bold text-lg rounded-full py-3 w-52 hover:bg-blue-700"
              />
            </div>
            <div class="">
              <img
                class="hidden lg:inline md:inline md:h-4/6 lg:h-5/6 lg:ml-40 md:ml-10"
                src="/illustration.svg"
              />
            </div>
          </div>
          <div id="mobile" className="block lg:hidden md:hidden mt-10 mx-auto">
            <div className="z-10">
              <div className="font-black text-center text-5xl pt-4">
                <div class="tagline mb-2 pt-2">Research.</div>Write.
                <br />
                Spread.
              </div>
              <div className="font-semibold text-center py-8 mt-1 text-accent mb-1">
                Science, space & tech is what all we talk and write about!
              </div>
              <div class="flex">
                <CustomButton
                  title="Coming Soon"
                  classextend="glow bg-secondary text-white font-bold text-lg mx-auto rounded-full py-3 w-52 hover:bg-blue-700"
                />
              </div>
            </div>
            <div class="z-0">
              <img
                style={{ transform: "scale(1.3)" }}
                class="pt-12 pb-2 block mt-10"
                src="/illustration.svg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
