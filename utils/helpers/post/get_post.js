import axios from "axios";

export async function getPostById(uid) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/byId/${uid}`
  );
  return res.data;
}

export async function getAllPosts() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/post`);
  return res.data;
}

export async function getTopPosts() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/topPosts`
  );
  console.log(res.data);
  return res.data;
}
