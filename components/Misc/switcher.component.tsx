import { useState } from "react";
import { Logo } from "../../types/ui.types";

interface SwitcherItem {
  logo: Logo;
  title: string;
}
interface Switcher {
  items: SwitcherItem[];
}

const Switcher = ({ items }: Switcher): JSX.Element => {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <div className="flex items-center space-x-4">
      <div className="flex rounded-full border border-gray-250 rounded-full">
        {items.map((Item, idx) => {
          return (
            <>
              <div
                className={`cursor-pointer duration-300 rounded-full p-2 ${
                  activeItem === idx
                    ? "bg-secondary text-white"
                    : "bg-transparent text-secondary"
                }`}
                onClick={() => setActiveItem(idx)}
                key={idx}
              >
                {Item.logo}
              </div>
            </>
          );
        })}
      </div>

      <div className="text-secondary font-medium text-sm w-16">
        {items[activeItem].title}
      </div>
    </div>
  );
};

export default Switcher;
