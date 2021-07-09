import React from "react";
import Details from "../../components/SignIn/SignInStages/stage1.section";
import Topics from "../../components/SignIn/SignInStages/stage2.section";
import Success from "../../components/SignIn/SignInStages/stage3.section";
import { useSignIn } from "../../components/SignIn/signin.provider";
import { StageType } from "../../components/SignIn/types";

function OnBoarding() {
  const { signInStage } = useSignIn();

  const CurrentStage = () => {
    if (signInStage === StageType.DETAILS) return <Details />;
    else if (signInStage === StageType.TOPICS) return <Topics />;
    else return <Success />;
  };

  return (
    <div
      className="min-h-screen flex flex-col md:justify-evenly lg:py-20 md:py-20"
      style={{
        backgroundImage: `url("/OnboardingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 2,
      }}
    >
      <CurrentStage />
    </div>
  );
}

export default OnBoarding;
