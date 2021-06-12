import { useApi } from "../../utils/providers/api.provider";
import PostCrumb from "../../components/Post/postcrumb.component";

function TrendingPosts() {
  const { getTopPosts } = useApi();
  const { trendingPosts, isError } = getTopPosts();

  return (
    <div className="flex flex-col space-y-2">
      {trendingPosts?.map((data, key) => (
        <PostCrumb post={data} key={key} />
      ))}
    </div>
  );
}

export default TrendingPosts;
