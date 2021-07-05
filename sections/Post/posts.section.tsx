import { useApi } from "../../utils/providers/api.provider";
import PostCard from "../../components/Post/postcard.component";

function Posts() {
  const { getAllPosts } = useApi();
  const { posts }: any = getAllPosts();

  return (
    <div className="flex flex-col space-y-2 text-primary">
      {posts?.map((data: any, idx: any) => (
        <div
          className={`bg-white-default duration-300 p-6 lg:p-7 border border-white-300 rounded-xl`}
          key={idx}
        >
          <PostCard post={data} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
