import { useRouter } from "next/router";
import { useState } from "react";
import People from "../../sections/SearchResults/people.section";
import Articles from "../../sections/SearchResults/articles.section";
import NavBar from "../../components/PageAssets/navbar.component";
import TrendingPosts from "../../sections/Post/trendingposts.section";
import Header from "../../components/Custom/header.component";
import NothingFound from "../../sections/SearchResults/nothingFound.component";
import { searchUser } from "../../utils/helpers/user/search_user";
import { searchPost } from "../../utils/helpers/post/search_post";
import { getUser } from "../../utils/helpers/user/get_user";
import { User, Post } from "../../types/data.types";

export const getServerSideProps = async (ctx) => {
  const query = ctx.query.query;
  const people = await searchUser(query);
  let articles = await searchPost(query);

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    article.author = await getUser(article.author_id);
  }

  return { props: { people, articles } };
};

interface Search {
  people: User[];
  articles: Post[];
}

enum SearchFilter {
  TOP,
  PEOPLE,
  ARTICLES,
}

function Search({ people, articles }: Search) {
  const router = useRouter();
  const { query } = router.query;
  const [filter, setFilter] = useState<SearchFilter>(SearchFilter.TOP);

  const SearchResults = () => {
    if (filter === SearchFilter.TOP && people && articles) {
      return (
        <>
          <People people={people} />
          <Articles articles={articles} />
        </>
      );
    } else if (filter === SearchFilter.PEOPLE && people) {
      return <People people={people} />;
    } else if (filter === SearchFilter.ARTICLES && articles) {
      return <Articles articles={articles} />;
    } else {
      return <NothingFound />;
    }
  };

  return (
    <main>
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
                    filter === SearchFilter.TOP ? "text-blue-800" : ""
                  } cursor-pointer duration-300 mt-1`}
                  onClick={() => setFilter(SearchFilter.TOP)}
                >
                  TOP
                </div>
                <div
                  className={`hover:text-blue-800 ${
                    filter === SearchFilter.PEOPLE ? "text-blue-800" : ""
                  } cursor-pointer duration-300 mt-1`}
                  onClick={() => setFilter(SearchFilter.PEOPLE)}
                >
                  PEOPLE
                </div>
                <div
                  className={`hover:text-blue-800 ${
                    filter === SearchFilter.ARTICLES ? "text-blue-800" : ""
                  } cursor-pointer duration-300 mt-1`}
                  onClick={() => setFilter(SearchFilter.ARTICLES)}
                >
                  ARTICLES
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-10">
              <SearchResults />
            </div>
          </div>
          <div className="w-2/4 hidden lg:block">
            <div className="mb-6">
              <Header title="Trending" />
            </div>
            <TrendingPosts />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;
