import React from "react";
import CustomButton from "../../components/Custom/custombutton.component";
import ProgressBar from "./progressbar.section";

function StageThree() {
  return (
    <div className="p-8 md:p-10 w-full xl:w-4/12 lg:w-5/12 md:w-8/12 bg-white-default mx-auto md:rounded-xl">
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
        <CustomButton
          onClick={() => (window.location.href = "/")}
          type="submit"
          title="Let's Go!"
          className="mt-6 mb-4 px-6 bg-secondary border-secondary border-2 py-3 font-semibold rounded-xl hover:bg-blue-700 text-white-default"
        />
      </div>
    </div>
  );
}

export default StageThree;
