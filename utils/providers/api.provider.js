import { useState, createContext, useContext } from "react";
import { searchUser } from "../helpers/user/search_user.js";
import { getUser } from "../helpers/user/get_user.js";
import { getTopPosts } from "../helpers/post/get_post.js";
import { searchPost } from "../helpers/post/search_post.js";
const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider
      value={{ searchUser, getTopPosts, getUser, searchPost }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
