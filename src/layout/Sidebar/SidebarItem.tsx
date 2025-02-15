import { ISidebarItem } from "@layout/interfaces";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const SidebarItem = ({ name, icon, link }: ISidebarItem) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === link);
  useEffect(() => {
    setIsActive(pathname === link);
  }, [pathname, link]);
  const activeClass = isActive ? "bg-white text-[#0d214d]" : "";
  const hoverClass = isActive ? "" : "hover:text-[#0d214d] hover:bg-white";
  return (
    <Link
      className={`w-full block p-4 border-b border-white hover:text-[#0d214d] hover:bg-white ${activeClass} ${hoverClass}`}
      to={link}
    >
      {icon && <i className={`fa-fw ${icon} mr-2`}></i>}
      {name}
    </Link>
  );
};

export default SidebarItem;
