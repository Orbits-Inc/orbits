import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
