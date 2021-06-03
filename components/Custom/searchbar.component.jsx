import CustomInput from "./custominput.component";
import { Search } from "react-feather";

function SearchBar() {
  return (
    <CustomInput
      placeholder="search ..."
      className="w-full lg:w-80 hover:bg-gray-100 duration-500 bg-gray-200"
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
