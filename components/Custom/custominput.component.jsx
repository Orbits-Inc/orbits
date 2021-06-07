const CustomInput = ({ className, onSubmit, logo, ...otherProps }) => {
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
