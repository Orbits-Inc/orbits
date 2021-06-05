import Section1 from "./section1.section";
import SignIn from "../../components/PageAssets/signin.component";

function LandingPage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <SignIn />
        <Section1 />
      </main>
    </div>
  );
}

export default LandingPage;
