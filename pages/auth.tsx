import Branding from "../components/Misc/branding";
import SignIn from "../components/PageAssets/signin.component";

const Auth = () => {
  return (
    <main className="bg-white-200 p-8 h-screen">
      <Branding />
      <div className="flex mt-20">
        <div className="m-auto text-center">
          <SignIn />
        </div>
      </div>
    </main>
  );
};

export default Auth;
