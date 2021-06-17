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
    <div className="mx-auto">
      <div className="font-bold h-full text-primary text-2xl">
        Login or Create an Account
      </div>
      <div className="mb-2 font-semibold text-accent text-sm p-4">
        Login to kick start sharing and making new ideas!
      </div>
      <FirebaseApp />
      <div className="absolute bottom-0 left-0 right-0 font-thin text-white-800 text-sm p-8 leading-loose">
        By continuing, you are indicating that you accept our <br />
        <a className="text-secondary cursor-pointer font-semibold hover:underline">
          Terms Of Service
        </a>{" "}
        and{" "}
        <a className="text-secondary cursor-pointer font-semibold hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default SignIn;
