import LandingPage from "../sections/LandingPage/index";
import PostCard from "../components/Post/postcard.component";
import { useApi } from "../utils/providers/api.provider";
import { useState } from "react";

export default function Home() {
  const { getTopPosts } = useApi();
  const [trendingPosts, setTrendingPosts] = useState(undefined);
  getTopPosts()
    .then((res) => setTrendingPosts(res[0]))
    .catch((err) => console.log(err));
  return (
    <>
      <LandingPage />
      <PostCard post={trendingPosts} />
    </>
  );
}
