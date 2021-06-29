import React, { useState, useEffect, useContext, createContext } from "react";
import addNewUser from "../helpers/user/add_new_user";
import firebaseClient from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { User } from "../../types/data.types";

// TODO: change User type to FirebaseUserData

interface UserContext {
  user: User | null;
}

const AuthContext = createContext<any>({ user: null, loading: true });

export const AuthProvider = ({ children }: any) => {
  firebaseClient();
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (_user) => {
      if (!_user) {
        setLoading(true);
        setUser(undefined);
        setLoading(false);
        return;
      }
      setLoading(true);
      setUser(_user);
      setLoading(false);
      try {
        await addNewUser(_user);
      } catch (err) {
        console.log(err);
      }
      //const __user = await getUser(_user.uid);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
