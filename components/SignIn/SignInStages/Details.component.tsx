import { Form, Formik } from "formik";
import React from "react";
import InputField from "../../../components/Custom/InputField";
import ContinueButton from "../ContinueButton.component";
import { useSignIn } from "../signin.provider";
import { StageType } from "../types";

interface Values {
  username: string;
  fullname: string;
}

const Details: React.FC = () => {
  const { moveToNextStage } = useSignIn();

  if (!moveToNextStage) return <>The devs messed up</>;

  const initialValues: Values = {
    // TODO: replace with firebase values later
    username: "",
    fullname: "",
  };

  const onSubmit = (
    values: Values,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    values.fullname.trim();
    values.username.trim();

    alert(values);

    setSubmitting(false);
    moveToNextStage(StageType.TOPICS, values);
  };

  return (
    <div>
      <div className="font-bold text-xl text-left mt-3">
        Let's setup your account
      </div>
      <div className="font-light text-xs text-left">
        Before getting started with Orbits
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        className="items-center"
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mt-4">
              <div className="text-xs text-gray-600 font-bold">User Name</div>
              <InputField
                className="mb-2 w-full py-4"
                name="username"
                placeholder="Enter User Name"
              />
            </div>
            <div className="mt-4">
              <div className="text-xs text-gray-600 font-medium">Full Name</div>
              <InputField
                className="mt-2 mb-6 w-full py-4"
                name="fullname"
                placeholder="Enter your Fullname"
              />
            </div>
            <ContinueButton
              className="p-10"
              title="Continue"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Details;
