const CustomButton = ({ title, className, logo, ...otherProps }) => {
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
