import axios from "axios";
import usernameSuggestion from "./username_suggestion";

export default async function addNewUser(user: any) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`, {
    user_id: user.uid,
    username: usernameSuggestion(user),
    name: user.displayName,
    email: user.email,
    display_picture: user.photoURL,
    bio: "",
    role: "user",
    followers: [],
    following: [],
    notifications: [],
    posts: [],
  });
  console.log(res);
}
