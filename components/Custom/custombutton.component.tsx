import React from "react";
import { Logo } from "../../types/ui.types";

interface CustomButton {
  title: string;
  className: string;
  logo?: Logo;
  logoPosition?: string;
  [otherProps: string]: any;
}

const CustomButton = ({
  title,
  className,
  logo,
  logoPosition,
  ...otherProps
}: CustomButton): JSX.Element => {
  return (
    <button
      style={{ outline: "none" }}
      className={`rounded-lg text-sm ${className || ""}`}
      {...otherProps}
    >
      {logoPosition == "left" ? logo : ""}
      {title}
      {logoPosition == "right" ? logo : ""}
    </button>
  );
};

export default CustomButton;
