import { Theme } from "@/components/Theme"

export const NAV_LINKS = [
  {
    route: "/",
    tabName: "首頁",
    icon: "/home.svg",
  },
  {
    route: "/dashboard",
    tabName: "我的紀錄",
    icon: "/layout-panel.svg",
  },
  {
    route: "/article",
    tabName: "部落格",
    icon: "/books.svg",
  },
]

export const THEME_ITEMS: Array<{mode: Theme, icon:string}> = [
  {
    mode: "light",
    icon: "/sun.svg",
  },
  {
    mode: "dark",
    icon: "/moon.svg",
  },
  {
    mode: "system",
    icon: "/system.svg",
  },
]