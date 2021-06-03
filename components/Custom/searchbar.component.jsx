import CustomInput from "./custominput.component";
import { Search } from "react-feather";

function SearchBar() {
  return (
    <CustomInput
      placeholder="search ..."
      logo={
        <Search
          className="relative inline text-gray-500 duration-300 cursor-pointer hover:bg-gray-200 p-2 rounded-full"
          size="40"
        />
      }
    />
  );
}

export default SearchBar;
