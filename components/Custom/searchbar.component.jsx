import CustomInput from "./custominput.component";
import { Search } from "react-feather";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState(undefined);

  return (
    <CustomInput
      placeholder="search ..."
      className="w-full lg:w-80 hover:bg-gray-100 duration-500 bg-gray-200"
      required
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (query) {
          window.location.href = `/search/${query}`;
        }
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
