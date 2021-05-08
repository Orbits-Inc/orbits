const CustomButton = ({ title, classextend, onclick, logo }) => {
  return (
    <button
      style={{ outline: "none" }}
      onClick={onclick}
      class={`rounded-lg text-sm font-semibold px-6 py-2 ${classextend || ""}`}
    >
      {logo ? logo : ""}{title}
    </button>
  );
};

export default CustomButton;
