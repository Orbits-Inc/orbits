import { createContext, useContext } from "react";
import { searchUser } from "../helpers/user/search_user";
import { getUser } from "../helpers/user/get_user";
import { getTopPosts, getAllPosts } from "../helpers/post/get_post";
import { searchPost } from "../helpers/post/search_post";

type anyArgs = [args: string];
interface ApiContext {
  [functions: string]: (anyArgs) => {};
}

const ApiContext = createContext<ApiContext>({});

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider
      value={{ searchUser, getAllPosts, getTopPosts, getUser, searchPost }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
