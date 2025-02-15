import { navigationArr } from "@constants/Navigation";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="text-white flex w-[20rem] h-[100vh] bg-[#1b3c83] flex-wrap">
      <div className="w-full h-[50px] bg-[#0d214d] flex items-center px-4">
        <span>Navigation</span>
        <i className="fa-solid fa-bars text-white ml-auto cursor-pointer"></i>
      </div>
      <div className="w-full h-[calc(100vh-50px)]">
        {navigationArr.map(({ name, icon, link }, index) => (
          <SidebarItem key={index} name={name} icon={icon} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
