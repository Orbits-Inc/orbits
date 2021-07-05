import axios from "axios";
import useSWR from "swr";

export async function getPostById(uid: String) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/byId/${uid}`
  );
  
  return res.data;
}

export function getAllPosts() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post`
  );

  return {
    posts: data,
    isError: error,
  };
}

export function getTopPosts() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/topPosts`
  );

  return {
    trendingPosts: data,
    isError: error,
  };
}
