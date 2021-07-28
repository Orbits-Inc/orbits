import axios from "axios";
import useSWR from "swr";

export async function getUser(uid: any) {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byId/${uid}`);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  };
}

export async function getUserByUsername(username: any) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byUsername/${username}`
  );
  return res.data;
}
