import axios from "axios";

export async function getUser(uid) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byId/${uid}`
  );
  return res.data;
}

export async function getUserByUsername(username) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byUsername/${username}`
  );
  return res.data;
}
