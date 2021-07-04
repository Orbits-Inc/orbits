import PostCard from "../../components/Post/postcard.component";
import NothingFound from "./nothingFound.component";
import Searching from "./searching.component";

function Articles({ articles }: any) {
  if (articles?.length > 0) {
    return (
      <div className="flex flex-col text-primary">
        <div className="mb-3 font-bold text-xl text-primary">Articles</div>
        {articles?.map((data: any, key: any) => (
          <div
            key={key}
            className={`cursor-pointer hover:bg-gray-100 duration-300 p-4 lg:p-5 border-l border-r border-b border-gray-300 ${
              key === 0 ? "rounded-t-xl border-t" : "rounded-none"
            } ${
              key === articles?.length - 1 ? "rounded-b-xl" : "rounded-none"
            }`}
          >
            <PostCard post={data} />
          </div>
        ))}
      </div>
    );
  } else if (articles?.length === 0) {
    return <NothingFound />;
  } else {
    return <Searching />;
  }
}

export default Articles;
