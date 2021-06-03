const CustomInput = ({ className, submitHandler, logo, ...otherProps }) => {
  return (
    <form
      className={`w-80 px-1 rounded-lg bg-gray-200 inline-flex ${
        className || ""
      }`}
      onSubmit={submitHandler}
    >
      {logo}
      <input
        className="outline-none text-sm text-primary px-1 bg-transparent rounded-lg"
        {...otherProps}
      />
    </form>
  );
};

export default CustomInput;
