import CustomInput from "./custominput.component";
import { Search } from "react-iconly";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState(undefined);

  const search = (q) => {
    q = q.trim();
    if (q && q !== "") {
      window.location.href = `/search/${q}`;
    }
  };

  return (
    <CustomInput
      placeholder="Search Orbits"
      className="py-4 w-full lg:w-80 duration-500 border border-white300 bg-white py-2 rounded-full px-8"
      required
      onChange={(e) => {
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
