import { useState, createContext, useContext } from "react";
import { searchUser } from "../helpers/user/search_user.js";

const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={{ searchUser }}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
