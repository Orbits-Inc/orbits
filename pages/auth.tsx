import Branding from "../components/Misc/branding";
import SignIn from "../components/PageAssets/signin.component";

const Auth = () => {
  return (
    <>
      <Branding />
      <div className="flex h-screen">
        <div className="m-auto text-center mb-72">
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default Auth;
