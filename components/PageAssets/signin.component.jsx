import Popup from "../Misc/popup.component";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseClient from "../../utils/firebase.js";
import { usePopup } from "../../utils/providers/popup.provider";
import OutsideClickHandler from "react-outside-click-handler";
import { X } from "react-feather";

const SignIn = () => {
  const { isOpen, setIsOpen } = usePopup();

  const uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        setIsOpen(false);
      },
    },
  };

  const FirebaseApp = () => {
    return (
      <>
        <StyledFirebaseAuth
          id="ui"
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    );
  };

  firebaseClient();

  return (
    <Popup className="flex justify-center" isOpen={isOpen}>
      <OutsideClickHandler
        className="relative"
        onOutsideClick={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <div className="fixed left-0 bottom-0 rounded-none w-full transition duration-300 ease-in-out bg-white p-6 pt-9 py-4 lg:p-12 lg:pb-6 md:pb-6 md:p-12 text-center">
          <X
            className="absolute top-0 right-0 m-5 cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div className="font-bold text-primary text-2xl">
            Login or Create an Account
          </div>
          <div className="font-semibold text-accent text-sm p-4">
            Login to kick start sharing and making new ideas!
          </div>
          <FirebaseApp />
          <div className="font-semibold text-accent lg:w-3/5 text-sm p-4 text-center mx-auto">
            By continuing, you are indicating that you accept our{" "}
            <a className="text-secondary cursor-pointer">Terms Of Service</a>{" "}
            and <a className="text-secondary cursor-pointer">Privacy Policy</a>
          </div>
        </div>
      </OutsideClickHandler>
    </Popup>
  );
};

export default SignIn;
