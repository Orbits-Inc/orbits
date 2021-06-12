import axios from "axios";
import useSWR from "swr";
import usernameSuggestion from "./username_suggestion.js";

export function getUser(uid) {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byId/${uid}`
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export async function getUserByUsername(username) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byUsername/${username}`
  );
  return res.data;
}
