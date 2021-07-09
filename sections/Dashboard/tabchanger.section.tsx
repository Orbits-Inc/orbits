import { TimeCircle, Activity, Filter } from "react-iconly";
import NavLink from "../../components/Misc/navlink.component";
import Switcher from "../../components/Misc/switcher.component";

function TabChanger() {
  const tabs = [
    {
      title: "All",
      href: "/",
    },
    {
      title: "Questions",
      href: "/questions",
    },
    { title: "Exploration", href: "/space-exploration" },
    { title: "Coding", href: "/coding" },
  ];
  return (
    <div
      id="myfeed"
      className="overflow-clip overflow-hidden border border-white-300 bg-white  text-base font-bold w-full py-4 px-8 rounded-t-xl"
    >
      <div className="flex justify-between items-center">
        <div>My Feed</div>
        <div className="flex space-x-4">
          <Switcher
            items={[
              {
                logo: <Activity size="small" />,
                title: "Relevant",
              },
              {
                logo: <TimeCircle size="small" />,
                title: "Recent",
              },
            ]}
            switcherItemClassName="px-5 hover:bg-white-200 text-gray-500 font-medium rounded-xl py-2 border-white-400 border text-sm"
            switcherItemActiveClassName="hover:bg-blue-200 border-blue-200 bg-blue-100 text-blue-600"
          />
          <Filter className="mt-1.5" />
        </div>
      </div>
      <div className="mt-4 flex space-x-10 text-black-200 text-sm font-medium">
        {tabs.map((data, idx) => (
          <NavLink
            className=""
            activeClassName="text-secondary font-bold"
            href={data.href}
            id={idx}
          >
            <a className="">{data.title}</a>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default TabChanger;
