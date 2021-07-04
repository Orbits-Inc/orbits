import { useField } from "formik";
import React from "react";

interface InputField {
  name: string;
}

const InputField: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputField
> = ({ className, ...props }) => {
  const [field] = useField(props);

  return (
    <input
      className={`border-gray-200 border-2 rounded-md py-2 px-4 ${className}`}
      {...field}
      {...props}
    />
  );
};

export default InputField;
