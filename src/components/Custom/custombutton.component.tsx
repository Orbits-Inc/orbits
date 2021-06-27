import React from "react";
import { Logo } from "../../types/ui.types";

interface CustomButton {
  title: string;
  className: string;
  logo?: Logo;
  [otherProps: string]: any;
}

const CustomButton = ({
  title,
  className,
  logo,
  ...otherProps
}: CustomButton): JSX.Element => {
  return (
    <button
      style={{ outline: "none" }}
      className={`rounded-lg text-sm ${className || ""}`}
      {...otherProps}
    >
      {logo ? logo : ""}
      {title}
    </button>
  );
};

export default CustomButton;
