import { usePopup } from "../../utils/providers/popup.provider";

const Popup = ({ className, children }) => {
  const { isOpen, setIsOpen } = usePopup();

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
