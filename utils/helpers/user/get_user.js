import axios from "axios";
import usernameSuggestion from "./username_suggestion.js";

export default async function getUser(uid) {
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
