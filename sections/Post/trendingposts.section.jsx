import { useApi } from "../../utils/providers/api.provider";
import PostCrumb from "../../components/Post/postcrumb.component";
import { useState } from "react";

function TrendingPosts() {
  const { getTopPosts } = useApi();
  const [trendingPosts, setTrendingPosts] = useState(undefined);
  getTopPosts()
    .then((res) => setTrendingPosts(res))
    .catch((err) => console.log(err));

  return (
    <div className="flex flex-col">
      {trendingPosts?.map((data, key) => (
        <PostCrumb post={data} />
      ))}
    </div>
  );
}

export default TrendingPosts;
