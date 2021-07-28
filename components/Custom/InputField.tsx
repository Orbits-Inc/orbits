import { useField } from "formik";
import React from "react";

const InputField: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    name: string;
  }
> = ({ className, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <>
      {!!error && <div>{error}</div>}
      <input
        className={`border border-white-500 w-full p-4 px-4 rounded-md ${className}`}
        {...field}
        {...props}
      />
    </>
  );
};

export default InputField;
