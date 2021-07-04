import React from "react";
import { Logo } from "../../types/ui.types";

interface CustomInput {
  className: string;
  onSubmit?: (...args: any[]) => void;
  logo?: Logo;
  [otherProps: string]: any;
}

const CustomInput = ({
  className,
  onSubmit = () => {},
  logo,
  ...otherProps
}: CustomInput): JSX.Element => {
  return (
    <form
      className={`px-1 rounded-lg inline-flex ${className || ""}`}
      onSubmit={onSubmit}
    >
      <div>{logo}</div>
      <input
        className="outline-none text-base text-primary px-1 bg-transparent rounded-lg"
        {...otherProps}
      />
    </form>
  );
};

export default CustomInput;
