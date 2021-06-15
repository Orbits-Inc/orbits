import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseClient from "../../utils/firebase";

const SignIn = () => {
  const uiConfig: any = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "/",
  };

  const FirebaseApp = () => {
    return (
      <>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    );
  };

  firebaseClient();

  return (
    <>
      <div className="font-bold text-primary text-2xl">
        Login or Create an Account
      </div>
      <div className="font-semibold text-accent text-sm p-4">
        Login to kick start sharing and making new ideas!
      </div>
      <FirebaseApp />
      <div className="font-thin text-accent lg:w-3/5 text-sm p-4 text-center mx-auto">
        By continuing, you are indicating that you accept our{" "}
        <a className="text-secondary cursor-pointer">Terms Of Service</a> and{" "}
        <a className="text-secondary cursor-pointer">Privacy Policy</a>
      </div>
    </>
  );
};

export default SignIn;
