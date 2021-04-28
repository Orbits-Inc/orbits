import CustomButton from "./custombutton.component";

const Navbar = ({classextend}) => {
    return (
      <div class={`flex justify-between ${classextend}`}>
        <div class="logo">
            <a href="/">
            <div class="flex">
              <img class="animate-spin-slow w-10 mr-5" src="/favicon.png" alt="logo" width="250px" className="inline mr-3" />
              <div class="font-bold text-3xl">orbits.</div>
            </div>
            </a>
        </div>
        <div>
        <ul class="navbar lg:block md:block hidden ml-auto h-12 mt-2 font-semibold text-xl text-white">
           <li class="mr-12 inline">
             <a class="nav-link nav-link-ltr" href="/">home</a>
           </li>
           <li class="mr-12 inline">
             <a class="nav-link nav-link-ltr" href="/contact">contact</a>
           </li>
           <li class="mr-12 inline">
             <a class="nav-link nav-link-ltr" href="/about">about</a>
           </li>
           <li class="inline">
             <CustomButton title="sign up" classextend="sign-up hover:text-white hover:bg-black border-2 border-white"/>
           </li>
        </ul>
        </div>
      </div>
    )
}

export default Navbar;
