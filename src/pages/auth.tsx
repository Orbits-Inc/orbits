import Branding from "../components/Misc/branding";
import SignIn from "../components/SignIn/signin.component";

const Auth = () => {
  return (
    <main className="bg-blue-500">
      <div className="flex h-screen">
        <div className="m-auto">
          <SignIn />
        </div>
      </div>
    </main>
  );
};

export default Auth;
