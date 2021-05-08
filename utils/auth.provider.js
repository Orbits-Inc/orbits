import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import firebaseClient from "./firebase.js";
import firebase from "firebase";
import "firebase/auth";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      console.log("auth changed");
      console.log(user ? user.id : "Nothing");
      if (!user) {
        setUser(null);
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
