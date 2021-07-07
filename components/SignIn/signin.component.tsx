import React from "react";
import Details from "./SignInStages/Details.component";
import Topics from "./SignInStages/Topics.component";
import Success from "./SignInStages/Success.component";
import SignInCard from "./signInCard.component";
import { StageType } from "./types";
import { useSignIn } from "./signin.provider";

const SignIn = () => {
  const { signInStage } = useSignIn();

  const CurrentStage = (): JSX.Element => {
    if (signInStage === StageType.DETAILS) return <Details />;
    else if (signInStage === StageType.TOPICS) return <Topics />;
    return <Success />;
  };

  return (
    <SignInCard>
      <>
        <div className="flex justify-center mt-4 mb-12">
          {[0, 1, 2].map((idx) => {
            return (
              <div
                key={idx}
                className={`${
                  signInStage?.valueOf() === idx
                    ? "bg-blue-500"
                    : "bg-white-300"
                } py-1 px-16 mx-4 rounded`}
              ></div>
            );
          })}
        </div>
        <CurrentStage />
      </>
    </SignInCard>
  );
};

export default SignIn;
