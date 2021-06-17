import { useState, createContext, useContext } from "react";

const PopupContext = createContext<any>({});

interface PopupProvider {
  children: JSX.Element;
}

export const PopupProvider = ({ children }: PopupProvider) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
