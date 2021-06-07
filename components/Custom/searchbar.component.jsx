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
      placeholder="search ..."
      className="w-full lg:w-80 duration-500 bg-gray-200"
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
          className="text-gray-500 duration-300 cursor-pointer p-2 rounded-full"
          size="40"
        />
      }
    />
  );
}

export default SearchBar;
