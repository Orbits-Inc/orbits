import React, { useState, useEffect, useContext, createContext } from "react";
import addNewUser from "../helpers/user/add_new_user";
import firebaseClient from "../firebase";
import firebase from "firebase";
import "firebase/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (_user) => {
      if (!_user) {
        setUser(null);
        return;
      }
      setUser(_user);
      try {
        await addNewUser(_user);
      } catch (err) {
        console.log(err);
      }
      //const __user = await getUser(_user.uid);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
