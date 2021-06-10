import CustomInput from "./custominput.component";
import { Search } from "react-feather";
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
      className="w-full lg:w-80 duration-500 border border-white300 bg-white py-2 rounded-full px-8"
      required
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      onSubmit={(e) => {
        e.preventDefault();
        search(query);
      }}
      logo={
        <Search
          className="text-gray-400 duration-300 cursor-pointer p-2"
          size="40"
        />
      }
    />
  );
}

export default SearchBar;
