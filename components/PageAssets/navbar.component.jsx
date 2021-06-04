import CustomButton from "../Custom/custombutton.component";
import { usePopup } from "../../utils/providers/popup.provider";
import Popup from "../Misc/popup.component";
import OutsideClickHandler from "react-outside-click-handler";
import { X, Bell, Search, LogOut } from "react-feather";
import { useState } from "react";
import { useAuth } from "../../utils/providers/auth.provider";
import SearchBar from "../Custom/searchbar.component";
import firebase from "firebase";
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const Navbar = ({ className, loginText }) => {
  const { isOpen, setIsOpen } = usePopup();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { user } = useAuth();
  return (
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
          <div className="fixed pt-16 left-0 bottom-0 rounded-none w-full transition duration-300 ease-in-out bg-white p-6 lg:p-12 md:p-12 text-center">
            <X
              className="absolute top-0 right-0 m-5 cursor-pointer"
              onClick={() => {
                setIsSearchBarOpen(false);
              }}
            />
            <SearchBar />
          </div>
        </OutsideClickHandler>
      </Popup>
      <div className="logo mt-2">
        <a href="/">
          <div className="flex">
            <img
              src="/favicon.png"
              alt="logo"
              width="250px"
              className="inline mr-3 w-10 h-10"
            />
            <div className="font-black mt-1 text-2xl">orbits</div>
          </div>
        </a>
      </div>
      <div>
        <ul className="navbar ml-auto h-12 mt-2 font-semibold text-xl text-accent">
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
                  size="36"
                />
              </div>
            </li>
          ) : (
            <></>
          )}
          <li className="inline">
            {!!user ? (
              <div className="relative inline-flex mr-3 lg:mr-6 md:mr-3">
                <Bell
                  className="relative inline text-primary duration-300 cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  size="36"
                />
                {user.ping || true ? (
                  <span className="flex absolute h-3 w-3 top-0 right-0">
                    <span className="absolute inline-flex rounded-full w-2 h-2 bg-secondary"></span>
                    <span className="relative inline-flex animate-ping rounded-full w-2 h-2 bg-secondary"></span>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <CustomButton
                onClick={() => {
                  setIsOpen(true);
                }}
                title="Login"
                className={`login bg-transparent border-2 border-gray-300 lg:mr-8 md:mr-8 ${
                  loginText ? loginText : "text-primary"
                } hover:border-gray-500`}
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
                  <LogOut className="mr-3" size="20" /> Logout
                </MenuItem>
              </Menu>
            ) : (
              <CustomButton
                onClick={() => {
                  setIsOpen(true);
                }}
                title="Sign up"
                className="sign-up lg:inline md:inline hidden bg-secondary text-white hover:text-white hover:bg-blue-700"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
