import Head from "next/head";
import Navbar from "../components/navbar.component";
import CustomInput from "../components/custominput.component";
import CustomButton from "../components/custombutton.component";
import SignIn from "../components/signin.component";
import { Edit2 } from "react-feather";
import { usePopup } from "../utils/popup.provider";
import { useAuth } from "../utils/auth.provider";

export default function Home() {
  const StartWriting = () => {
    return (
      <CustomButton
        logo={<Edit2 className="inline mr-3 mb-2 mt-1" size="24" />}
        title="Start Writing"
        classextend="mx-auto lg:mx-none md:lg-none glow bg-secondary text-white font-bold text-lg rounded-full py-3 px-8 hover:bg-blue-700"
        onclick={() => {
          if (!user) {
            setIsOpen(true);
          }
        }}
      />
    );
  };

  const { isOpen, setIsOpen } = usePopup();
  const { user } = useAuth();

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
        <SignIn />
        <div
          id="level-1"
          className="relative h-screen p-6 py-3 lg:py-6 md:py-6 lg:px-24 md:px-24 text-primary"
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
              <StartWriting />
            </div>
            <div class="">
              <img
                class="hidden lg:inline lg:mb-3 md:inline md:h-4/6 lg:h-5/6 lg:ml-10 md:ml-10"
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
                <StartWriting />
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
