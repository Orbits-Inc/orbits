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
      <div className="absolute w-full bottom-0 p-7">
        <CustomButton
          title="Create Account"
          className="w-full bg-secondary border-secondary border-2 py-3 font-medium rounded-xl hover:bg-blue-700 text-white-default"
        />
      </div>
    </div>
  );
}

export default LoginPrompt;
