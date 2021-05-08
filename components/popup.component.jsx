import { usePopup } from "../utils/popup.provider"

const Popup = ({ classextend, children }) => {

    const { isOpen, setIsOpen } = usePopup();

    return (
        <div
            className={`z-10 popup ${isOpen ? "fixed" : "hidden"} h-screen ${classextend} w-full`}
        >
            {children}
        </div>
    );
};

export default Popup;
