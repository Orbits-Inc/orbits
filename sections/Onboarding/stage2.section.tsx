import ProgressBar from "./progressbar.section";
import { useOnboarding } from "./providers/onboarding.provider";
import React, { useState } from "react";
import CustomButton from "../../components/Custom/custombutton.component";

const sleep = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });

function StageTwo() {
  const { setStage } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);

  const Tag = ({ tag }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <div
        onClick={() => setIsSelected(!isSelected)}
        className={`duration-100 cursor-pointer mr-3 mb-3 flex px-3 space-x-2 items-center text-sm rounded-full p-2 ${
          isSelected
            ? "border-2 border-blue-600 font-semibold text-blue-600 bg-blue-100"
            : "border border-white-500 font-medium text-black-300"
        }`}
      >
        <img
          className="rounded-full w-6 h-6"
          src="https://i.pinimg.com/originals/51/2a/e9/512ae9665ca4091e4a186f1fc891207b.png"
        />
        <div>{tag}</div>
      </div>
    );
  };

  return (
    <div className="p-8 md:p-10 w-full xl:w-4/12 lg:w-5/12 md:w-8/12 bg-white-default mx-auto md:rounded-xl">
      <ProgressBar />
      <div className="md:px-3 mb-5">
        <div className="text-black-400 font-bold text-lg mb-1">
          Pick your favourite Topics
        </div>
        <div className="text-black-100 font-body text-xs">
          Choose at least 3 of them! You can change them later
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="flex flex-wrap">
          <Tag tag="Astronomy" />
          <Tag tag="Astronomy" />
          <Tag tag="Physics" />
          <Tag tag="Coding" />
          <Tag tag="Astronomy" />
          <Tag tag="Astronomy" />
          <Tag tag="SpaceExploration" />
          <Tag tag="Astronomy" />
          <Tag tag="Astronomy" />
        </div>
        <div className="flex justify-between">
          <CustomButton
            onClick={() => setStage(1)}
            type="submit"
            title="Go Back"
            className="duration-300 px-6 py-3 font-semibold text-secondary hover:text-blue-700"
          />
          <CustomButton
            isLoading={isLoading}
            onClick={async () => {
              setIsLoading(true);
              await sleep(500);
              setStage(3);
              setIsLoading(false);
            }}
            type="submit"
            title="Continue"
            className="px-6 bg-secondary border-secondary border-2 py-3 font-semibold rounded-xl hover:bg-blue-700 text-white-default"
          />
        </div>
      </div>
    </div>
  );
}

export default StageTwo;
