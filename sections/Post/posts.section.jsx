import { useApi } from "../../utils/providers/api.provider";
import { useEffect, useState } from "react";
import PostCard from "../../components/Post/postcard.component";

function Posts() {
  const { getAllPosts } = useApi();
  const [posts, setPosts] = useState(undefined);
  getAllPosts()
    .then((res) => setPosts(res))
    .catch((err) => console.log(err));
  return (
    <div className="flex flex-col text-primary">
      {posts?.map((data, key) => (
        <div
          className={`bg-white duration-300 p-5 md:p-6 lg:p-7 border-l border-r border-b border-white300 ${
            key === 0 ? "rounded-t-xl border-t" : "rounded-none"
          } ${key === posts?.length - 1 ? "rounded-b-xl" : "rounded-none"}`}
        >
          <PostCard post={data} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
