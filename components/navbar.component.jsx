import CustomButton from "./custombutton.component";

const Navbar = ({ classextend, logintext }) => {
  return (
    <div class={`flex justify-between ${classextend}`}>
      <div class="logo mt-2">
        <a href="/">
          <div class="flex">
            <img
              class="w-10 mr-1"
              src="/favicon.png"
              alt="logo"
              width="250px"
              className="inline mr-3"
            />
            <div class="font-black mt-1 text-2xl">orbits</div>
          </div>
        </a>
      </div>
      <div>
        <ul class="navbar ml-auto h-12 mt-2 font-semibold text-xl text-accent">
          <li class="inline">
            <CustomButton
              title="Login"
              classextend={`login bg-transparent border-2 border-gray-300 lg:mr-8 md:mr-8 ${logintext ? logintext : "text-primary"
                } hover:border-gray-500`}
            />
          </li>
          <li class="inline">
            <CustomButton
              title="Sign up"
              classextend="sign-up lg:inline md:inline hidden bg-secondary text-white hover:text-white hover:bg-blue-700"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
