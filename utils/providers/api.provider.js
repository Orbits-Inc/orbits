import { useState, createContext, useContext } from "react";
import { searchUser } from "../helpers/user/search_user.js";
import { getUser } from "../helpers/user/get_user.js";
import { getTopPosts } from "../helpers/post/get_post.js";

const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={{ searchUser, getTopPosts, getUser }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
