import { ISidebarItem } from "@layout/interfaces";

export const navigationArr: ISidebarItem[] = [
  {
    name: "Dashboard",
    icon: "fa-solid fa-chart-line",
    link: "/",
  },
  {
    name: "Add Content",
    icon: "fa-solid fa-keyboard",
    link: "/rte",
  },
  {
    name: "Products",
    icon: "fa-solid fa-box",
    link: "/products",
  },
  {
    name: "Orders",
    icon: "fa-solid fa-shopping-cart",
    link: "/orders",
  },
  {
    name: "Settings",
    icon: "fa-solid fa-cog",
    link: "/settings",
  },
];
