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
        className={`border-gray-200 border-2 rounded-md py-2 px-4 ${className}`}
        {...field}
        {...props}
      />
    </>
  );
};

export default InputField;
