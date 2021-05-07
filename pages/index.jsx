import Head from 'next/head'
import Navbar from "../components/navbar.component"
import CustomInput from "../components/custominput.component"
import CustomButton from "../components/custombutton.component"
import {useState} from "react";
import addEmail from "../utils/add_email.js";
import { useToasts} from 'react-toast-notifications'
export default function Home() {
  const [email,setEmail]=useState("")
  const { addToast } = useToasts()
  return (
    <div>
      <Head>
        <meta name="description" content="Science, space & tech is what all we talk and write about!" />
        <meta name="title" content={`Orbits`} />
        <meta name="image" content="/favicon.png" />
        <meta property="og:title" content={`Orbits`} />
        <meta property="og:description" content="Science, space & tech is what all we talk and write about!" />
        <meta property="og:image" content="/favicon.png" />
        <title>Orbits</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main class="overflow-hidden">
        <div id="level-1" className="relative h-screen p-6 px-20 text-primary">
          <Navbar/>
            <div id="child" class="flex justify-evenly w-11/12 lg:mt-24 md:mt-28">
              <div className="">
              <div className="font-black lg:text-7xl md:text-5xl mx-auto lg:mx-0 md:mx-0 mr-12 text-4xl pt-4"><div class="tagline mb-2 pt-2">Research.</div>Write.<br/>Spread.</div>
              <div className="font-semibold text-accent mx-auto lg:mx-0 md:mx-0 py-8">Science, space & tech is what all we talk and write about!</div>
              <CustomButton title="Coming Soon" classextend="glow bg-secondary text-white font-bold text-lg rounded-full py-3 w-52 hover:bg-blue-700 outline-none"/>
            </div>
            <div class="">
              <img class="inline md:h-4/6 lg:h-5/6 lg:ml-40 md:ml-10" src="/illustration.svg"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
