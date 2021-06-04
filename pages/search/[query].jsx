import { useRouter } from "next/router";
import SearchResults from "../../sections/SearchResults/index.js";
import NavBar from "../../components/PageAssets/navbar.component";

function Search() {
  const router = useRouter();
  const { query } = router.query;
  return (
    <div className="relative lg:h-screen md:h-screen p-6 py-3 lg:py-3 md:py-3 lg:px-24 md:px-24 text-primary">
      <NavBar />
      <div className="font-bold my-12 text-2xl lg:text-3xl md:text-3xl">
        Search Results for{" "}
        <span className="text-secondary cursor-pointer hover:underline">
          {query}
        </span>
        <div className="mt-3 text-base lg:text-lg md:text-lg text-secondary border-2 flex bg-blue-50 border-blue-500 space-x-12 rounded-lg py-2 px-6">
          <div className="hover:text-blue-700 cursor-pointer duration-300 mt-1">
            People
          </div>
          <div className="hover:text-blue-700 cursor-pointer duration-300 mt-1">
            Articles
          </div>
        </div>
      </div>
      <SearchResults query={query} />
    </div>
  );
}

export default Search;
