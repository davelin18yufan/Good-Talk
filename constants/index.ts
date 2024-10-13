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

export const THEME_ITEMS: Array<{ mode: Theme; icon: string }> = [
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

export const ARTICLE_SEARCHBAR_PLACEHOLDERS = [
  "你想找甚麼標題",
  "還是想找甚麼關鍵字",
  "Tag也可以喔",
  "找作者當然沒問題",
]

export const BLOG_FILTERS = [
  {
    groupName: "Topics",
    items: [
      { name: "Investing", value: "investing" },
      { name: "Saving", value: "saving" },
      { name: "Retirement Planning", value: "retirement-planning" },
      { name: "Cryptocurrency", value: "cryptocurrency" },
      { name: "Personal Finance", value: "personal-finance" },
      { name: "Real Estate", value: "real-estate" },
      { name: "Budgeting", value: "budgeting" },
    ],
  },
  {
    groupName: "Authors",
    items: [
      { name: "John Finance", value: "john-finance" },
      { name: "Jane Investor", value: "jane-investor" },
      { name: "Alice Moneywise", value: "alice-moneywise" },
      { name: "Mark Wealth", value: "mark-wealth" },
    ],
  },
  {
    groupName: "Publish Date",
    items: [
      { name: "Last 7 Days", value: "last-7-days" },
      { name: "Last 30 Days", value: "last-30-days" },
      { name: "Last Year", value: "last-year" },
      { name: "Older", value: "older" },
    ],
  },
  {
    groupName: "Tags",
    items: [
      { name: "Stock Market", value: "stock-market" },
      { name: "ETFs", value: "etfs" },
      { name: "Cryptocurrency", value: "cryptocurrency" },
      { name: "Tax Planning", value: "tax-planning" },
      { name: "Financial Independence", value: "financial-independence" },
    ],
  },
]

export const DEFAULT_COVER_URL = "/image.svg"

export const SOCIAL_LINKS = [
  {
    title: "facebook",
    href: "#",
    icon: "/facebook.svg",
  },
  {
    title: "github",
    href: "#",
    icon: "/github.svg",
  },
  {
    title: "instagram",
    href: "#",
    icon: "/instagram.svg",
  },
  {
    title: "mail",
    href: "#",
    icon: "/mail.svg",
  },
]

// 6 items
export const DEFAULT_LAYOUTS = {
  lg: [
    { w: 4, h: 6, x: 5, y: 0, i: "0", moved: false, static: false },
    { w: 3, h: 3, x: 9, y: 0, i: "1", moved: false, static: false },
    { w: 5, h: 6, x: 4, y: 6, i: "2", moved: false, static: false },
    { w: 3, h: 9, x: 9, y: 3, i: "3", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 6, i: "4", moved: false, static: false },
    { w: 5, h: 6, x: 0, y: 0, i: "5", moved: false, static: false },
  ],
  md: [
    { w: 5, h: 8, x: 5, y: 14, i: "0", moved: false, static: false },
    { w: 6, h: 6, x: 4, y: 8, i: "1", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 8, i: "2", moved: false, static: false },
    { w: 5, h: 8, x: 5, y: 0, i: "3", moved: false, static: false },
    { w: 5, h: 8, x: 0, y: 14, i: "4", moved: false, static: false },
    { w: 5, h: 8, x: 0, y: 0, i: "5", moved: false, static: false },
  ],
  sm: [
    { w: 3, h: 7, x: 3, y: 13, i: "0", moved: false, static: false },
    { w: 3, h: 6, x: 0, y: 7, i: "1", moved: false, static: false },
    { w: 3, h: 7, x: 0, y: 13, i: "2", moved: false, static: false },
    { w: 3, h: 7, x: 3, y: 0, i: "3", moved: false, static: false },
    { w: 3, h: 6, x: 3, y: 7, i: "4", moved: false, static: false },
    { w: 3, h: 7, x: 0, y: 0, i: "5", moved: false, static: false },
  ],
  xs: [
    { w: 4, h: 7, x: 0, y: 32, i: "0", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 15, i: "1", moved: false, static: false },
    { w: 4, h: 5, x: 0, y: 21, i: "2", moved: false, static: false },
    { w: 4, h: 8, x: 0, y: 7, i: "3", moved: false, static: false },
    { w: 4, h: 6, x: 0, y: 26, i: "4", moved: false, static: false },
    { w: 4, h: 7, x: 0, y: 0, i: "5", moved: false, static: false },
  ],
  xxs: [
    { w: 2, h: 7, x: 0, y: 33, i: "0", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 15, i: "1", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 21, i: "2", moved: false, static: false },
    { w: 2, h: 8, x: 0, y: 7, i: "3", moved: false, static: false },
    { w: 2, h: 6, x: 0, y: 27, i: "4", moved: false, static: false },
    { w: 2, h: 7, x: 0, y: 0, i: "5", moved: false, static: false },
  ],
}