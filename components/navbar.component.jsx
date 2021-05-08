import CustomButton from "./custombutton.component";
import { usePopup } from "../utils/popup.provider"
import { useAuth } from "../utils/auth.provider"
import firebase from "firebase";

const Navbar = ({ classextend, logintext }) => {
  const { isOpen, setIsOpen } = usePopup();
  const { user } = useAuth();

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
            {!!user ?
              (<CustomButton
                onclick={() => { firebase.auth().signOut().then(() => { window.location.href = "/" }).catch((err) => { console.log(err) }) }}
                title="Log out"
                classextend={`login bg-transparent border-2 border-gray-300 mr-4 lg:mr-8 md:mr-8 ${logintext ? logintext : "text-primary"
                  } hover:border-gray-500`}
              />)
              :
              (<CustomButton
                onclick={() => { setIsOpen(true) }}
                title="Login"
                classextend={`login bg-transparent border-2 border-gray-300 lg:mr-8 md:mr-8 ${logintext ? logintext : "text-primary"
                  } hover:border-gray-500`}
              />)
            }
          </li>
          <li class="inline">
            {!!user ?
              (<img class="rounded-full inline h-10" src={user.photoURL} />)
              :
              (<CustomButton
                onclick={() => { setIsOpen(true) }}
                title="Sign up"
                classextend="sign-up lg:inline md:inline hidden bg-secondary text-white hover:text-white hover:bg-blue-700"
              />)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
