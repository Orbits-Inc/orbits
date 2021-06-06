import Dashboard from "../sections/Dashboard/dashboard.section";
import PostCard from "../components/Post/postcard.component";
import { useApi } from "../utils/providers/api.provider";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
