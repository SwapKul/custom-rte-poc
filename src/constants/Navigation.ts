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
    name: "Progress Bar",
    icon: "fa-solid fa-bars-progress",
    link: "/progress",
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
