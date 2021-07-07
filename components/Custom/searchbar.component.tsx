import CustomInput from "./custominput.component";
import { Search } from "react-iconly";
import { useState } from "react";
interface SearchBar {
  className?: string;
}

function SearchBar({ className }: SearchBar) {
  const [query, setQuery] = useState<string>("");

  const search = (q: string) => {
    q = q.trim();
    if (q && q !== "") {
      window.location.href = `/search/${q}`;
    }
  };

  return (
    <CustomInput
      id="search-bar"
      placeholder="Search Orbits"
      className={`hover:border-2 hover:border-secondary py-4 w-full lg:w-80 duration-500 border-2 border-white-300 bg-white-default py-2 rounded-full px-8 ${className}`}
      required
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
      }}
      onSubmit={(e) => {
        e.preventDefault();
        search(query);
      }}
      logo={
        <Search className="mr-2 pb-1 text-gray-400 duration-300 cursor-pointer" />
      }
    />
  );
}

export default SearchBar;
