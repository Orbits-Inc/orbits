import CustomButton from "../../../components/Custom/custombutton.component";
import { ChevronRight } from "react-iconly";
import { X } from "react-feather";
function LoginPrompt() {
  return (
    <div
      className="relative rounded-xl border border-white-300"
      id="login-prompt"
      style={{
        backgroundImage: `url("/sidebar_login_prompt.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 right-0 m-4 text-gray-400 hover:text-black cursor-pointer">
        <X />
      </div>
      <div className="absolute w-full bottom-0 p-7">
        <CustomButton
          logo={<ChevronRight stroke="bold" className="inline ml-2 pb-1" />}
          logoPosition="right"
          title="Get Started"
          className="font-semibold w-full bg-secondary border-secondary border-2 py-3 rounded-xl hover:bg-blue-700 text-white-default"
        />
      </div>
    </div>
  );
}

export default LoginPrompt;
