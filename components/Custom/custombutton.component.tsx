import React, { useState } from "react";
import { Logo } from "../../types/ui.types";

interface CustomButton {
  title: string;
  className: string;
  logo?: Logo;
  logoPosition?: string;
  isLoading?: boolean;
  [otherProps: string]: any;
}

const CustomButton = ({
  title,
  className,
  logo,
  isLoading,
  logoPosition,
  promise,
  ...otherProps
}: CustomButton): JSX.Element => {
  return (
    <button
      style={{ outline: "none" }}
      className={`rounded-lg text-sm ${className || ""}`}
      {...otherProps}
    >
      {isLoading ? (
        <>
          <img className="w-5 h-5 mx-5" src="/spinner.svg" />
        </>
      ) : (
        <>
          {logoPosition == "left" ? logo : ""}
          {title}
          {logoPosition == "right" ? logo : ""}
        </>
      )}
    </button>
  );
};

export default CustomButton;
