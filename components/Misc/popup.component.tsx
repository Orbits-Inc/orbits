interface Popup {
  className: string;
  children: JSX.Element;
  isOpen: boolean;
}

const Popup = ({ className, children, isOpen }: Popup): JSX.Element => {
  return (
    <div
      className={`z-10 popup ${isOpen ? "fixed" : "hidden"} h-screen ${
        className || ""
      } w-full`}
    >
      {children}
    </div>
  );
};

export default Popup;
