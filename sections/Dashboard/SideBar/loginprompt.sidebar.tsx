import CustomButton from "../../../components/Custom/custombutton.component";

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
      <div className="absolute w-full bottom-0 px-5 py-7">
        <CustomButton
          title="Create Account"
          className="w-full border-secondary border-2 text-secondary py-3 font-medium rounded-xl hover:bg-secondary hover:text-white-default"
        />
      </div>
    </div>
  );
}

export default LoginPrompt;
