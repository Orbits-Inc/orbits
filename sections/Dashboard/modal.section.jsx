import Navbar from "../../components/PageAssets/navbar.component";
import CustomButton from "../../components/Custom/custombutton.component";
import { Edit2, X, ChevronDown } from "react-feather";
import { usePopup } from "../../utils/providers/popup.provider";
import { useAuth } from "../../utils/providers/auth.provider";
import { useState } from "react";

function Modal() {
  const StartWriting = () => {
    return (
      <CustomButton
        title="Coming Soon"
        className="mx-auto lg:mx-none md:lg-none glow bg-secondary text-white font-bold text-sm rounded-full py-4 px-12 hover:bg-blue-700"
        onClick={() => {
          if (!user) {
            setIsOpen(true);
          }
        }}
      />
    );
  };
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        backgroundImage: `url("/artwork.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`${
        isOpen ? "relative" : "hidden"
      } shadow-sm text-primary w-full p-12 px-20 rounded-xl`}
    >
      <X
        className="absolute text-gray-400 hover:text-black top-0 right-0 m-5 cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div>
        <div className="font-black text-center lg:text-left md:text-left lg:text-5xl md:text-5xl mx-auto lg:mx-0 md:mx-0 lg:mr-12 md:mr-12 text-4xl pt-4">
          <div className="tagline mb-2 pt-2">Research.</div>Write.
          <br />
          Spread.
        </div>
        <div className="font-medium w-2/4 text-accent text-sm my-6">
          Science, space & tech is what all we talk and write about!
        </div>
        <div className="flex flex-col items-center" />
        <div>
          <StartWriting />
        </div>
        <div className="duration-300 cursor-pointer hover:text-secondary text-xs ml-3 text-blue-700 py-5">
          I'll just look around for now
          <ChevronDown className="inline ml-2" size="18" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
