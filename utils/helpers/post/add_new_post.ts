import axios from "axios";

export default async function addNewUser(post: any) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/post`, {
    title: post.title,
    description: post.description,
    tags: post.tags,
    content: post.content,
    image: post.image,
    author_id: post.author_id,
    likes: [],
    comments: [],
  });
  console.log(res);
}
