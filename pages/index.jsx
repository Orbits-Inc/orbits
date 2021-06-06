import LandingPage from "../sections/LandingPage/index";
import PostCard from "../components/Post/postcard.component";
import { useApi } from "../utils/providers/api.provider";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
