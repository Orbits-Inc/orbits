import { useApi } from "../../utils/providers/api.provider";
import PostCrumb from "../../components/Post/postcrumb.component";

function TrendingPosts() {
  const { getTopPosts } = useApi();
  const { trendingPosts, isError }: any = getTopPosts();

  return (
    <div className="flex flex-col space-y-1">
      {trendingPosts?.map((data: any, key: any) => (
        <>
          <PostCrumb post={data} key={key} />
          {key !== trendingPosts?.length - 1 ? <hr /> : <></>}
        </>
      ))}
    </div>
  );
}

export default TrendingPosts;
