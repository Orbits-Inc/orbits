import { Form, Formik } from "formik";
import React, { useState } from "react";
import ProgressBar from "../progressbar.section";
import { useSignIn } from "../signin.provider";
import InputField from "../../Custom/InputField";
import GoBackContinueButton from "../GoBackContinueButton";
import { StageType } from "../types";

interface Data {
  username: string;
  fullname: string;
  dob: string;
}

const Details = () => {
  const { moveToStage } = useSignIn();
  if (!moveToStage) return null;

  const initialValues: Data = { username: "", fullname: "", dob: "" };
  const [data, setData] = useState<Data>(initialValues);

  const onSubmit = (
    values: Data,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    values.fullname.trim();
    values.username.trim();

    setData(values);

    alert(JSON.stringify(values));

    setSubmitting(false);
    moveToStage(StageType.TOPICS, data);
  };

  return (
    <div className="md:relative bottom-0 p-8 md:p-10 my-auto w-full xl:w-4/12 lg:w-5/12 md:w-8/12 bg-white mx-auto md:rounded-xl">
      <ProgressBar />
      <div>
        <div className="md:px-3">
          <div className="text-black-400 font-bold text-lg mb-1">Let's set up your Account</div>
          <div className="text-black-100 font-body text-xs">Before getting started with Orbits</div>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          className="md:px-3 mt-6 flex flex-col space-y-7">
          {({ isSubmitting }) => (
            <Form className="md:px-3 mt-6 flex flex-col space-y-7">
              <div>
                <div className="text-black-200 text-xs font-semibold mb-2">User Name</div>
                <InputField
                  name="username"
                  placeholder="Enter User Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="text-black-200 text-xs font-semibold mb-2">Full Name</div>
                <InputField
                  name="fullname"
                  placeholder="Enter your Fullname"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="text-black-200 text-xs font-semibold mb-2">Date of Birth</div>
                <InputField
                  name="dob"
                  placeholder="Enter your DOB"
                  autoComplete="off"
                  type="date"
                  required
                />
              </div>
              <div className="ml-auto">
                <GoBackContinueButton
                  type="submit"
                  title="Continue"
                  variant="continue"
                  className="ml-auto"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Details;
