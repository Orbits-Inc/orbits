import Dashboard from "../sections/Dashboard/dashboard.section";
import PostCard from "../components/Post/postcard.component";
import { useApi } from "../utils/providers/api.provider";
import { useState } from "react";

export default function Home() {
  return (
    <main className="overflow-x-hidden p-5 2xl:px-64 bg-white200">
      <Dashboard />
    </main>
  );
}
