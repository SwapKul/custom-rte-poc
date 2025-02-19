import { ISidebarItem } from "@layout/interfaces";
import { Link, useLocation } from "react-router";

const SidebarItem = ({ name, icon, link }: ISidebarItem) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;
  const activeClass = isActive ? "bg-white text-secondary-blue" : "";
  const hoverClass = isActive ? "" : "hover:text-secondary-blue hover:bg-white";
  return (
    <Link
      className={`w-full block p-4 border-b border-white hover:text-secondary-blue hover:bg-white ${activeClass} ${hoverClass}`}
      to={link}
    >
      {icon && <i className={`fa-fw ${icon} mr-2`}></i>}
      {name}
    </Link>
  );
};

export default SidebarItem;
