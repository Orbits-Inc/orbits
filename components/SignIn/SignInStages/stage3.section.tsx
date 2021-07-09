import React from "react";
import ProgressBar from "../progressbar.section";
import GoBackContinueButton from "../GoBackContinueButton";
import { useSignIn } from "../signin.provider";
import { StageType } from "../types";

const Success: React.FC = () => {
  const { moveToStage } = useSignIn();
  if (!moveToStage) return null;

  return (
    <div className="absolute md:relative bottom-0 p-8 md:p-10 w-full xl:w-4/12 lg:w-5/12 md:w-8/12 bg-white mx-auto md:rounded-xl">
      <ProgressBar />
      <div className="px-3">
        <div className="mb-10">
          <img src="/successfull.svg" />
        </div>
        <div className="md:px-3 mb-6">
          <div className="text-black-400 font-bold text-xl mb-3">
            You are all good to go!
          </div>
          <div className="text-black-200 font-medium font-body text-sm">
            <span>
              Welcome to the Orbits Community! We made Orbits for everyone who
              love to learn and grow together. Hope you have a great time here!
              Also here’s{" "}
              <span className="text-secondary font-bold">50 Orbs</span> 😉
            </span>
            <br />
            <br />
            <span>
              With love,
              <br />
              Team Orbits.
            </span>
          </div>
        </div>
        <GoBackContinueButton
          onClick={() => {
            moveToStage(StageType.END);
          }}
          title="Let's Go!"
          variant="continue"
        />
      </div>
    </div>
  );
};

export default Success;
