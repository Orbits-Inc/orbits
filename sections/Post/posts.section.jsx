import { useApi } from "../../utils/providers/api.provider";
import { useEffect, useState } from "react";
import PostCard from "../../components/Post/postcard.component";

function Posts() {
  const { getAllPosts } = useApi();
  const { posts, isError } = getAllPosts();

  return (
    <div className="flex flex-col space-y-2 text-primary">
      {posts?.map((data, key) => (
        <div
          className={`bg-white duration-300 p-6 lg:p-7 border border-white300 rounded-xl`}
        >
          <PostCard post={data} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
