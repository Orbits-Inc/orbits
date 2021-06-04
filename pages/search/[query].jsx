import { useRouter } from "next/router";
import SearchResults from "../../sections/SearchResults/index.js";
import NavBar from "../../components/PageAssets/navbar.component";
import TrendingPosts from "../../sections/Post/trendingposts.section";
import Header from "../../components/Custom/header.component";

function Search() {
  const router = useRouter();
  const { query } = router.query;
  return (
    <div className="relative lg:h-screen md:h-screen p-6 py-3 lg:py-3 md:py-3 lg:px-24 md:px-24 text-primary">
      <NavBar />
      <div className="flex justify-between space-x-10 mt-12">
        <div className="w-full">
          <div className="font-bold mb-12 text-2xl">
            Search Results for{" "}
            <span className="text-secondary cursor-pointer hover:underline">
              {query}
            </span>
            <div className="mt-3 text-sm text-secondary border-2 flex bg-blue-50 border-blue-500 space-x-12 rounded-lg py-2 px-6">
              <div className="hover:text-blue-700 cursor-pointer duration-300 mt-1">
                PEOPLE
              </div>
              <div className="hover:text-blue-700 cursor-pointer duration-300 mt-1">
                ARTICLES
              </div>
            </div>
          </div>
          <SearchResults query={query} />
        </div>
        <div class="w-2/4 hidden lg:block">
          <div className="mb-6">
            <Header title="Trending" />
          </div>
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
}

export default Search;
