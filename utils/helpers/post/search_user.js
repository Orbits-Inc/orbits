import axios from "axios";

export async function searchPost(query) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/search/${query}`
  );
  return res.data;
}

export async function searchPostByTag(query) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/searchByTag/${query}`
  );
  return res.data;
}
