import { useState, createContext, useContext } from "react";
import { searchUser } from "../helpers/user/search_user";
import { getUser } from "../helpers/user/get_user";
import { getTopPosts, getAllPosts } from "../helpers/post/get_post";
import { searchPost } from "../helpers/post/search_post";
const ApiContext = createContext({});

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
