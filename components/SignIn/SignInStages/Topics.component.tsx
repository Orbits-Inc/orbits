import React, { ReactFragment } from "react";
import { topicsInterested } from "../../../utils/topicsInterested";
import ContinueButton from "../ContinueButton.component";

interface Topic {
  name: string;
  selected: boolean;
}

const Topic: React.FC<Topic> = ({ name, selected }) => {
  return (
    <div className="rounded-full w-12 h-5">
      {name}
      {selected}
    </div>
  );
};

const Topics: React.FC = () => {
  return (
    <>
      {topicsInterested.map((topic) => {
        return <Topic name={topic} selected={false} />;
      })}
      <ContinueButton className="p-10" title="Continue" />;
    </>
  );
};

export default Topics;
