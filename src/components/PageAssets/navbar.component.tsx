import CustomButton from "../Custom/custombutton.component";
import { usePopup } from "../../utils/providers/popup.provider";
import Popup from "../Misc/popup.component";
import OutsideClickHandler from "react-outside-click-handler";
import { X, Menu as MenuFeather } from "react-feather";
import {
  ChevronDown,
  Notification,
  Search,
  Logout,
  Bookmark,
  Discovery,
  Edit,
} from "react-iconly";

import { useState } from "react";
import { useAuth } from "../../utils/providers/auth.provider";
import SearchBar from "../Custom/searchbar.component";
import firebase from "firebase/app";
import NavLink from "../Misc/navlink.component";
import { Menu, MenuItem, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

interface Navbar {
  className?: string;
  loginText?: string;
}

const Navbar = ({ className, loginText }: Navbar) => {
  const { setIsOpen } = usePopup();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const { user } = useAuth();

  const MobileNavbar = () => (
    <div className={`flex justify-between ${className || ""}`}>
      <Popup className="top-0 left-0" isOpen={isSearchBarOpen}>
        <OutsideClickHandler
          className="relative"
          onOutsideClick={() => {
            if (isSearchBarOpen) {
              setIsSearchBarOpen(false);
            }
          }}
        >
          <div className="fixed pt-16 left-0 bottom-0 rounded-none w-full transition duration-300 ease-in-out bg-white-default p-6 lg:p-12 md:p-12 text-center">
            <X
              className="absolute top-0 right-0 m-5 cursor-pointer"
              onClick={() => {
                setIsSearchBarOpen(false);
              }}
            />
            <SearchBar className="w-full" />
          </div>
        </OutsideClickHandler>
      </Popup>
      <div className="logo mt-">
        <a href="/">
          <div className="flex">
            <img
              src="/logo.png"
              alt="logo"
              width="250px"
              className="inline mr-1 w-12 h-12"
            />
          </div>
        </a>
      </div>
      <div>
        <ul className="flex items-center navbar ml-auto h-12 mt-2 font-semibold text-xl text-accent">
          {!!user ? (
            <li className="hidden lg:inline">
              <div className="inline-flex mr-6 text-primary">
                <SearchBar />
              </div>
            </li>
          ) : (
            <></>
          )}
          {!!user ? (
            <li className="inline lg:hidden">
              <div className="inline-flex mr-3 text-primary">
                <Search
                  onClick={() => {
                    setIsSearchBarOpen(true);
                  }}
                  className="relative inline text-primary duration-300 cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  size="large"
                />
              </div>
            </li>
          ) : (
            <></>
          )}
          <li className="inline">
            {!!user ? (
              <div className="relative inline-flex mr-3 lg:mr-6 md:mr-3">
                <Notification
                  className="relative inline text-primary duration-300 cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  size="large"
                />
                {
                  /*user.ping || */ true ? (
                    <span className="flex absolute h-3 w-3 top-0 right-0">
                      <span className="absolute inline-flex rounded-full w-2 h-2 bg-secondary"></span>
                      <span className="relative inline-flex animate-ping rounded-full w-2 h-2 bg-secondary"></span>
                    </span>
                  ) : (
                    <></>
                  )
                }
              </div>
            ) : (
              <CustomButton
                onClick={() => {
                  window.location.href = "/auth";
                }}
                title="Login"
                className={`rounded-full mb-2 font-semibold text-sm px-5 py-2 login bg-transparent border-2 border-blue-500 lg:mr-3 md:mr-3 ${
                  loginText ? loginText : "text-secondary"
                } hover:bg-secondary hover:text-white-default`}
              />
            )}
          </li>
          <li className="inline">
            {!!user ? (
              <Menu
                className="text-sm font-medium"
                menuButton={
                  <div className="inline-flex">
                    <img
                      className="rounded-full inline w-10 h-10 duration-300 hover:bg-gray-200 p-1 cursor-pointer"
                      src={user.photoURL}
                    />
                  </div>
                }
              >
                <MenuItem>Your profile</MenuItem>
                <MenuItem>Start writing</MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    firebase.auth().signOut();
                    window.location.href = "/";
                  }}
                >
                  <Logout className="mr-3" size="20" /> Logout
                </MenuItem>
              </Menu>
            ) : (
              <CustomButton
                onClick={() => {
                  setIsOpen(true);
                }}
                title="Sign up"
                className="sign-up mb-2 rounded-full border-2 border-blue-500 hover:border-blue-700 text-sm font-semibold px-5 py-2 lg:inline md:inline hidden bg-secondary text-white-default hover:text-white-default hover:bg-blue-700"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );

  const StartWriting = () => {
    return (
      <CustomButton
        logo={<Edit className="inline mr-2" />}
        title="Write"
        className="bg-secondary py-3.5 w-full text-white-default font-bold text-sm rounded-full hover:bg-blue-700"
        onClick={() => {
          if (!user) {
            setIsOpen(true);
          }
        }}
      />
    );
  };

  const DesktopNavbar = () => (
    <>
      <div className="fixed h-screen w-56 lg:pb-10 md:pb-5">
        <div className="border border-white-300 p-6 rounded-xl bg-white-default w-full h-full">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="logo">
                <a href="/">
                  <div className="flex">
                    <img
                      src="/logo.png"
                      alt="logo"
                      width="250px"
                      className="inline mr-1 w-10 h-10"
                    />
                    <div className="font-black mt-2 text-2xl">orbits</div>
                  </div>
                </a>
              </div>
              <div className="mt-6">
                <StartWriting />
              </div>
              <div className="flex flex-col space-y-6 my-8 mt-12 font-medium text-primary">
                <NavLink
                  href="/"
                  activeClassName="text-secondary font-semibold"
                >
                  <a className="flex space-x-4">
                    <MenuFeather /> <div>My Feed</div>
                  </a>
                </NavLink>
                <NavLink
                  href="/explore"
                  activeClassName="text-secondary font-semibold"
                >
                  <a className="flex space-x-4">
                    <Discovery /> <div>Explore</div>
                  </a>
                </NavLink>
                <NavLink
                  href="/profile"
                  activeClassName="text-secondary font-semibold"
                >
                  <a className="flex space-x-4">
                    <Notification /> <div>Notifications</div>
                  </a>
                </NavLink>
                <NavLink
                  href="/bookmarks"
                  activeClassName="text-secondary font-semibold"
                >
                  <a className="flex space-x-4">
                    <Bookmark /> <div>Bookmarks</div>
                  </a>
                </NavLink>
                <NavLink
                  href="/profile"
                  activeClassName="text-secondary font-semibold"
                >
                  <a className="flex space-x-4">
                    <ChevronDown /> <div>More</div>
                  </a>
                </NavLink>
              </div>
            </div>
            <div>
              {!user && (
                <CustomButton
                  className="font-semibold border-2 border-blue-500 text-secondary w-full px-6 py-3 hover:bg-blue-500 hover:text-white rounded-full"
                  title="Login"
                  onClick={() => {
                    window.location.href = "/auth";
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-56"></div>
    </>
  );

  return (
    <div>
      <div className="hidden md:block lg:block">
        <DesktopNavbar />
      </div>
      <div className="block md:hidden lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
