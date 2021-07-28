import React from "react";

const buttonVariants = {
  continue:
    "px-5 bg-secondary border-secondary border-2 py-3 rounded-xl hover:bg-blue-700 text-white text-sm",
  goBack: "duration-300 px-6 py-3 text-secondary hover:text-blue-700",
};

const GoBackContinueButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    variant: keyof typeof buttonVariants;
  }
> = ({ title, disabled, variant, ...props }): JSX.Element => {
  return (
    <button
      {...props}
      type="submit"
      disabled={disabled}
      className={`focus:outline-none font-semibold ${
        buttonVariants[variant]
      }${" "}
        ${disabled ? "bg-blue-300" : ""}`}
    >
      {title}
    </button>
  );
};

export default GoBackContinueButton;
