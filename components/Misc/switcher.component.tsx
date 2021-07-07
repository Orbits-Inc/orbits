import { useState } from "react";
import { Logo } from "../../types/ui.types";

interface SwitcherItem {
  logo?: Logo;
  title: string;
}
interface Switcher {
  items: SwitcherItem[];
  switcherClassName?: string;
  switcherItemClassName?: string;
  switcherItemActiveClassName?: string;
}

const Switcher = ({
  items,
  switcherClassName = "",
  switcherItemClassName = "",
  switcherItemActiveClassName = "",
}: Switcher): JSX.Element => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div
      className={`hidden lg:flex md:flex items-center space-x-4 ${switcherClassName}`}
    >
      {items.map((item, idx) => {
        return (
          <div
            className={`duration-300 ${switcherItemClassName} ${
              activeItem === idx ? switcherItemActiveClassName : ""
            } cursor-pointer`}
            onClick={() => setActiveItem(idx)}
          >
            <div className="flex items-center">
              {item.logo ? <div className="pr-2">{item.logo}</div> : <></>}
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Switcher;
