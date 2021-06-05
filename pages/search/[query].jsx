import { useRouter } from "next/router";
import { useState } from "react";
import People from "../../sections/SearchResults/people.section";
import Articles from "../../sections/SearchResults/articles.section";
import NavBar from "../../components/PageAssets/navbar.component";
import TrendingPosts from "../../sections/Post/trendingposts.section";
import Header from "../../components/Custom/header.component";

function Search() {
  const router = useRouter();
  const { query } = router.query;
  const [filter, setFilter] = useState("TOP");

  const SearchResults = () => {
    if (filter === "TOP") {
      return (
        <>
          <People query={query} />
          <Articles query={query} />
        </>
      );
    } else if (filter === "PEOPLE") {
      return <People query={query} />;
    } else {
      return <Articles query={query} />;
    }
  };

  return (
    <div className="p-4 py-2 lg:py-3 md:py-3 lg:px-24 md:px-24 text-primary">
      <NavBar />
      <div className="flex justify-between space-x-10 mt-10">
        <div className="w-full">
          <div className="font-bold mb-12 text-2xl">
            Search Results for{" "}
            <span className="text-secondary cursor-pointer hover:underline">
              {query}
            </span>
            <div className="mt-3 text-sm text-secondary border-2 flex bg-blue-50 border-blue-500 space-x-12 rounded-lg py-2 px-6 justify-between lg:justify-start">
              <div
                className={`hover:text-blue-800 ${
                  filter === "TOP" ? "text-blue-800" : ""
                } cursor-pointer duration-300 mt-1`}
                onClick={() => setFilter("TOP")}
              >
                TOP
              </div>
              <div
                className={`hover:text-blue-800 ${
                  filter === "PEOPLE" ? "text-blue-800" : ""
                } cursor-pointer duration-300 mt-1`}
                onClick={() => setFilter("PEOPLE")}
              >
                PEOPLE
              </div>
              <div
                className={`hover:text-blue-800 ${
                  filter === "ARTICLES" ? "text-blue-800" : ""
                } cursor-pointer duration-300 mt-1`}
                onClick={() => setFilter("ARTICLES")}
              >
                ARTICLES
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10">
            <SearchResults />
          </div>
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
