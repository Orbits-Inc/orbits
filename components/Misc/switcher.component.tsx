import { useState } from "react";

function Switcher({ item1, item2 }) {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className="flex items-center space-x-4">
      <div className="flex rounded-full border border-gray-250 rounded-full">
        <div
          className={`cursor-pointer duration-300 rounded-full p-2 ${
            activeItem === 1
              ? "bg-secondary text-white"
              : "bg-transparent text-secondary"
          }`}
          onClick={() => setActiveItem(1)}
        >
          <item1.logo />
        </div>
        <div
          className={`cursor-pointer duration-300 rounded-full p-2 ${
            activeItem === 2
              ? "bg-secondary text-white"
              : "bg-transparent text-secondary"
          }`}
          onClick={() => setActiveItem(2)}
        >
          <item2.logo />
        </div>
      </div>
      <div className="text-secondary font-medium text-sm w-16">
        {activeItem == 1 ? item1.title : item2.title}
      </div>
    </div>
  );
}

export default Switcher;
