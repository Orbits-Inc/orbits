import React from "react";

const ContinueButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ title, disabled, className, ...props }): JSX.Element => {
  return (
    <button
      {...props}
      type="submit"
      disabled={disabled}
      className={`focus:outline-none bg-blue-500 rounded-lg px-5 py-3 text-white text-sm hover:bg-blue-600 
        ${disabled ? "bg-blue-300" : ""} ${className}`}
    >
      {title}
    </button>
  );
};

export default ContinueButton;
