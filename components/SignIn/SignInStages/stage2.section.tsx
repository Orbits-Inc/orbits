import ProgressBar from "../progressbar.section";
import React, { useState } from "react";
import { useSignIn } from "../signin.provider";
import GoBackContinueButton from "../GoBackContinueButton";
import { StageType } from "../types";
import { TopicsInterested } from "../../../utils/topicsInterested";

export const Tag: React.FC<{
  tag: TopicsInterested;
}> = ({ tag }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    if (isSelected) {
      // removeTopic
    } else {
      // addTopic
    }

    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={handleClick}
      className={`duration-75 cursor-pointer mr-3 mb-3 flex px-2 space-x-2 items-center text-sm rounded-full p-2 ${
        isSelected
          ? "border border-blue-600 font-semibold text-blue-600 bg-blue-100"
          : "border border-white-500 font-medium text-black-300"
      }`}>
      <img
        className="rounded-full w-6 h-6"
        src="https://i.pinimg.com/originals/51/2a/e9/512ae9665ca4091e4a186f1fc891207b.png"
        alt={"img"}
      />
      <div className="normal-case">{TopicsInterested[tag]}</div>
    </div>
  );
};

const Topics: React.FC = () => {
  const { moveToStage } = useSignIn();
  if (!moveToStage) return null;

  return (
    <div className="absolute md:relative bottom-0 p-8 md:p-10 w-full xl:w-4/12 lg:w-5/12 md:w-8/12 bg-white mx-auto md:rounded-xl">
      <ProgressBar />
      <div className="md:px-3 mb-5">
        <div className="text-black-400 font-bold text-lg mb-1">Pick your favourite Topics</div>
        <div className="text-black-100 font-body text-xs">
          Choose at least 3 of them! You can change them later
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="flex flex-wrap">
          <Tag tag={TopicsInterested.ASTRONOMY} />
          <Tag tag={TopicsInterested.SPACE} />
          <Tag tag={TopicsInterested.PHYSICS} />
          <Tag tag={TopicsInterested.ASTRONOMY} />
          <Tag tag={TopicsInterested.SPACE} />
          <Tag tag={TopicsInterested.PHYSICS} />
          <Tag tag={TopicsInterested.ASTRONOMY} />
          <Tag tag={TopicsInterested.SPACE} />
          <Tag tag={TopicsInterested.PHYSICS} />
        </div>
        <div className="flex justify-between">
          <GoBackContinueButton
            type="submit"
            title="Go Back"
            variant="goBack"
            onClick={() => moveToStage(StageType.DETAILS, undefined)}
          />
          <GoBackContinueButton
            type="submit"
            title="Continue"
            variant="continue"
            onClick={() => moveToStage(StageType.SUCCESS, [])}
          />
        </div>
      </div>
    </div>
  );
};

export default Topics;
