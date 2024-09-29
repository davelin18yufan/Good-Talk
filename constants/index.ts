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

export const ARTICLE_SEARCHBAR_PLACEHOLDERS = [
  "你想找甚麼標題",
  "還是想找甚麼關鍵字",
  "Tag也可以喔",
  "找作者當然沒問題"
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
