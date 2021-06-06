import { useApi } from "../../utils/providers/api.provider";
import { useEffect, useState } from "react";
import PostCard from "../../components/Post/postcard.component";

function Articles({ query }) {
  const { searchPost } = useApi();
  const [results, setResults] = useState(undefined);
  searchPost(query)
    .then((res) => setResults(res))
    .catch((err) => console.log(err));
  if (results?.length > 0) {
    return (
      <div className="flex flex-col text-primary">
        <div className="mb-3 font-bold text-xl text-primary">Articles</div>
        {results?.map((data, key) => (
          <div
            className={`cursor-pointer hover:bg-gray-100 duration-300 p-4 lg:p-5 border-l border-r border-b border-gray-300 ${
              key === 0 ? "rounded-t-xl border-t" : "rounded-none"
            } ${key === results?.length - 1 ? "rounded-b-xl" : "rounded-none"}`}
          >
            <PostCard post={data} />
          </div>
        ))}
      </div>
    );
  } else if (results?.length === 0) {
    return (
      <div className="flex flex-col">
        <div className="mb-3 font-bold text-xl text-primary">Articles</div>
        <div className="border border-gray-300 rounded-xl py-3 px-6 text-accent text-sm">
          🐝 Nothing found...
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="mb-3 font-bold text-xl text-primary">Articles</div>
        <div className="border border-gray-300 rounded-xl py-3 px-6 text-accent text-sm">
           <img className="w-6 h-6 inline mr-1" src="/spinner.svg"/> Searching...
        </div>
      </div>
    );
  }
}

export default Articles;
