import { usePopup } from "../../utils/providers/popup.provider";

const Popup = ({ className, children, isOpen }) => {
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
