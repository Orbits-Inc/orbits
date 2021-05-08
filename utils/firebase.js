import firebase from "firebase";

export const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
