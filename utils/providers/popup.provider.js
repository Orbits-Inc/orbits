import { useState, createContext, useContext } from "react";

const PopupContext = createContext({});

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
