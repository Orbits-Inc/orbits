const CustomButton = ({ title, className, logo, ...otherProps }) => {
  return (
    <button
      style={{ outline: "none" }}
      className={`rounded-lg text-sm font-semibold px-6 py-2 ${
        className || ""
      }`}
      {...otherProps}
    >
      {logo ? logo : ""}
      {title}
    </button>
  );
};

export default CustomButton;
