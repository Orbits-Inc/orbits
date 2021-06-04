import axios from "axios";

export async function searchUser(query) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/search/${query}`
  );
  return res.data;
}
