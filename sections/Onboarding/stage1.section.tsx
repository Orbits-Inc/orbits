import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useOnboarding } from "./providers/onboarding.provider";
import ProgressBar from "./progressbar.section";
import CustomInput from "../../components/Custom/custominput.component";
import CustomButton from "../../components/Custom/custombutton.component";

const sleep = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });

function StageOne() {
  const { setStage } = useOnboarding();
  const [data, setData] = useState({
    username: "",
    name: "",
    dob: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="absolute md:relative bottom-0 p-8 md:p-10 my-auto w-full xl:w-4/12 lg:w-5/12 md:w-8/12 bg-white-default mx-auto md:rounded-xl">
      <ProgressBar />
      <div>
        <div className="md:px-3">
          <div className="text-black-400 font-bold text-lg mb-1">
            Let's set up your Account
          </div>
          <div className="text-black-100 font-body text-xs">
            Before getting started with Orbits
          </div>
        </div>
        <Formik
          initialValues={{ username: "", name: "", dob: "", ...data }}
          onSubmit={async (values) => {
            setIsLoading(true);
            setData(values);
            await sleep(500);
            setStage(2);
            setIsLoading(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="md:px-3 mt-6 flex flex-col space-y-7">
              {/*username*/}
              <div className="">
                <div className="text-black-200 text-xs font-semibold mb-2">
                  User Name
                </div>
                <Field
                  as={CustomInput}
                  name="username"
                  required
                  className="border border-white-500 w-full p-4 px-4"
                  placeholder="Enter User Name"
                />
              </div>
              <div>
                <div className="text-black-200 text-xs font-semibold mb-2">
                  Full Name
                </div>
                <Field
                  name="name"
                  as={CustomInput}
                  required
                  className="border border-white-500 w-full p-4 px-4"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="lg:w-10/12 md:w-11/12">
                <div className="text-black-200 text-xs font-semibold mb-2">
                  Date of Birth
                </div>
                <Field
                  name="dob"
                  as={CustomInput}
                  required
                  type="date"
                  className="border border-white-500 w-full p-4 px-4"
                  placeholder="Date Of Birth"
                />
                <div className="text-black-100 font-body text-xs mt-2">
                  This will not be shown publicly. Confirm your own age, if this
                  account is for your business or something else
                </div>
              </div>
              <CustomButton
                isLoading={isLoading}
                type="submit"
                title="Continue"
                className="ml-auto px-6 bg-secondary border-secondary border-2 py-3 font-semibold rounded-xl hover:bg-blue-700 text-white-default"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default StageOne;
