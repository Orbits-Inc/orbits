import React from "react";
import { useOnboarding } from "./providers/onboarding.provider";
import StageOne from "./stage1.section";
import StageTwo from "./stage2.section";
import StageThree from "./stage3.section";

function OnBoarding() {
  const { stage } = useOnboarding();

  return (
    <div
      className="min-h-screen h-full py-4 lg:py-20 md:py-20"
      style={{
        backgroundImage: `url("/OnboardingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 2,
      }}
    >
      <div className={`${stage === 1 ? "block" : "hidden"}`}>
        <StageOne />
      </div>
      <div className={`${stage === 2 ? "block" : "hidden"}`}>
        <StageTwo />
      </div>
      <div className={`${stage === 3 ? "block" : "hidden"}`}>
        <StageThree />
      </div>
    </div>
  );
}

export default OnBoarding;
