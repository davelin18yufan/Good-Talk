import { Theme } from "@/hooks/useTheme"
import { ROUTES } from "./routes"
import { ChartImageProps, CompactType } from "@/types/chart"
import { ResponsiveLayouts } from "@/types/chart"

export const NAV_LINKS = [
  {
    route: ROUTES.HOME,
    tabName: "首頁",
    icon: "/home.svg",
  },
  {
    route: ROUTES.DASHBOARD,
    tabName: "我的紀錄",
    icon: "/layout-panel.svg",
  },
  {
    route: ROUTES.ARTICLE(),
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

// All charts
export const Charts = [
  "ProfitChart",
  "RealizedPnlChart",
  "TradeFundBase",
  "TradeLog",
  "TradePlan",
  "TradeSummary",
  "GoalProgress",
] as const

export const DEFAULT_COMPACTTYPE: CompactType = "vertical"

// Default Layout => 6 items
export const DEFAULT_LAYOUTS = {
  lg: [
    {
      w: 5,
      h: 8,
      x: 0,
      y: 9,
      i: "0",
      minW: 3,
      minH: 8,
      moved: false,
      static: false,
      chartId: "ProfitChart",
    },
    {
      w: 4,
      h: 18,
      x: 9,
      y: 9,
      i: "1",
      minW: 4,
      minH: 12,
      moved: false,
      static: false,
      chartId: "TradePlan",
    },
    {
      w: 4,
      h: 8,
      x: 5,
      y: 9,
      i: "2",
      minW: 4,
      minH: 8,
      moved: false,
      static: false,
      chartId: "RealizedPnlChart",
    },
    {
      w: 8,
      h: 10,
      x: 5,
      y: 0,
      i: "3",
      minW: 7,
      minH: 8,
      moved: false,
      static: false,
      chartId: "TradeFundBase",
    },
    {
      w: 9,
      h: 10,
      x: 0,
      y: 17,
      i: "4",
      minW: 5,
      minH: 9,
      moved: false,
      static: false,
      chartId: "TradeLog",
    },
    {
      w: 5,
      h: 10,
      x: 0,
      y: 0,
      i: "5",
      minW: 5,
      minH: 6,
      moved: false,
      static: false,
      chartId: "TradeSummary",
    },
  ],
  md: [
    {
      w: 5,
      h: 8,
      x: 0,
      y: 9,
      i: "0",
      minW: 3,
      minH: 8,
      moved: false,
      static: false,
      chartId: "ProfitChart",
    },
    {
      w: 5,
      h: 16,
      x: 5,
      y: 9,
      i: "1",
      minW: 4,
      minH: 12,
      moved: false,
      static: false,
      chartId: "TradePlan",
    },
    {
      w: 5,
      h: 8,
      x: 0,
      y: 17,
      i: "2",
      minW: 4,
      minH: 8,
      moved: false,
      static: false,
      chartId: "RealizedPnlChart",
    },
    {
      w: 6,
      h: 10,
      x: 4,
      y: 0,
      i: "3",
      minW: 6,
      minH: 8,
      moved: false,
      static: false,
      chartId: "TradeFundBase",
    },
    {
      w: 10,
      h: 10,
      x: 0,
      y: 25,
      i: "4",
      minW: 5,
      minH: 9,
      moved: false,
      static: false,
      chartId: "TradeLog",
    },
    {
      w: 4,
      h: 10,
      x: 0,
      y: 0,
      i: "5",
      minW: 4,
      minH: 6,
      moved: false,
      static: false,
      chartId: "TradeSummary",
    },
  ],
  sm: [
    {
      w: 3,
      h: 8,
      x: 0,
      y: 16,
      i: "0",
      minW: 3,
      minH: 8,
      moved: false,
      static: false,
      chartId: "ProfitChart",
    },
    {
      w: 6,
      h: 12,
      x: 0,
      y: 24,
      i: "1",
      minW: 4,
      minH: 12,
      moved: false,
      static: false,
      chartId: "TradePlan",
    },
    {
      w: 3,
      h: 8,
      x: 3,
      y: 16,
      i: "2",
      minW: 3,
      minH: 8,
      moved: false,
      static: false,
      chartId: "RealizedPnlChart",
    },
    {
      w: 6,
      h: 10,
      x: 0,
      y: 0,
      i: "3",
      minW: 5,
      minH: 8,
      moved: false,
      static: false,
      chartId: "TradeFundBase",
    },
    {
      w: 6,
      h: 10,
      x: 0,
      y: 36,
      i: "4",
      minW: 5,
      minH: 9,
      moved: false,
      static: false,
      chartId: "TradeLog",
    },
    {
      w: 6,
      h: 9,
      x: 0,
      y: 7,
      i: "5",
      minW: 5,
      minH: 6,
      moved: false,
      static: false,
      chartId: "TradeSummary",
    },
  ],
  xs: [
    {
      w: 4,
      h: 8,
      x: 0,
      y: 25,
      i: "0",
      minW: 3,
      minH: 8,
      moved: false,
      static: false,
      chartId: "ProfitChart",
    },
    {
      w: 4,
      h: 12,
      x: 0,
      y: 33,
      i: "1",
      minW: 4,
      minH: 12,
      moved: false,
      static: false,
      chartId: "TradePlan",
    },
    {
      w: 4,
      h: 8,
      x: 0,
      y: 17,
      i: "2",
      minW: 4,
      minH: 8,
      moved: false,
      static: false,
      chartId: "RealizedPnlChart",
    },
    {
      w: 4,
      h: 8,
      x: 0,
      y: 0,
      i: "3",
      minW: 5,
      minH: 7,
      moved: false,
      static: false,
      chartId: "TradeFundBase",
    },
    {
      w: 4,
      h: 10,
      x: 0,
      y: 45,
      i: "4",
      minW: 5,
      minH: 9,
      moved: false,
      static: false,
      chartId: "TradeLog",
    },
    {
      w: 4,
      h: 9,
      x: 0,
      y: 8,
      i: "5",
      minW: 5,
      minH: 6,
      moved: false,
      static: false,
      chartId: "TradeSummary",
    },
  ],
  xxs: [
    {
      w: 2,
      h: 8,
      x: 0,
      y: 29,
      i: "0",
      minW: 3,
      minH: 8,
      moved: false,
      static: false,
      chartId: "ProfitChart",
    },
    {
      w: 2,
      h: 12,
      x: 0,
      y: 17,
      i: "1",
      minW: 4,
      minH: 12,
      moved: false,
      static: false,
      chartId: "TradePlan",
    },
    {
      w: 2,
      h: 8,
      x: 0,
      y: 37,
      i: "2",
      minW: 4,
      minH: 8,
      moved: false,
      static: false,
      chartId: "RealizedPnlChart",
    },
    {
      w: 2,
      h: 8,
      x: 0,
      y: 0,
      i: "3",
      minW: 5,
      minH: 7,
      moved: false,
      static: false,
      chartId: "TradeFundBase",
    },
    {
      w: 2,
      h: 10,
      x: 0,
      y: 45,
      i: "4",
      minW: 5,
      minH: 9,
      moved: false,
      static: false,
      chartId: "TradeLog",
    },
    {
      w: 2,
      h: 9,
      x: 0,
      y: 8,
      i: "5",
      minW: 5,
      minH: 6,
      moved: false,
      static: false,
      chartId: "TradeSummary",
    },
  ],
} as ResponsiveLayouts

// Toolboxt
export const DEFAULT_TOOLBOX = {
  xxs: [
    {
      w: 5,
      h: 6,
      x: 0,
      y: 0,
      i: "6",
      minW: 4,
      minH:5,
      moved: false,
      static: false,
      chartId: "GoalProgress",
    },
  ],
  xs: [
    {
      w: 5,
      h: 6,
      x: 0,
      y: 0,
      i: "6",
      minW: 4,
      minH:5,
      moved: false,
      static: false,
      chartId: "GoalProgress",
    },
  ],
  sm: [
    {
      w: 6,
      h: 6,
      x: 0,
      y: 0,
      i: "6",
      minW: 4,
      minH:5,
      moved: false,
      static: false,
      chartId: "GoalProgress",
    },
  ],
  md: [
    {
      w: 4,
      h: 6,
      x: 0,
      y: 0,
      i: "6",
      minW: 4,
      minH:5,
      moved: false,
      static: false,
      chartId: "GoalProgress",
    },
  ],
  lg: [
    {
      w: 5,
      h: 6,
      x: 0,
      y: 0,
      i: "6",
      minW: 4,
      minH:5,
      moved: false,
      static: false,
      chartId: "GoalProgress",
    },
  ],
} as ResponsiveLayouts

export const CHART_IMAGES: ChartImageProps[] = [
  {
    id: "TradeSummary",
    src: "https://plus.unsplash.com/premium_vector-1731550773801-fff33ce70b82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
    alt: "Partnership",
  },
  {
    id: "TradePlan",
    src: "https://plus.unsplash.com/premium_vector-1731309600268-514b749b68a3?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Plans",
  },
  {
    id: "TradeFundBase",
    src: "https://plus.unsplash.com/premium_vector-1721680794481-312360aafed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYXJ0fGVufDB8fDB8fHww",
    alt: "Review",
  },
  {
    id: "TradeLog",
    src: "https://plus.unsplash.com/premium_vector-1682297811554-692cb64a8fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    alt: "Trading",
  },
  {
    id: "RealizedPnlChart",
    src: "https://plus.unsplash.com/premium_vector-1727956884194-a3a43efcf726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcnR8ZW58MHx8MHx8fDA%3D",
    alt: "Big Data",
  },
  {
    id: "ProfitChart",
    src: "https://plus.unsplash.com/premium_vector-1720102933697-e125583f8edb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNoYXJ0fGVufDB8fDB8fHww",
    alt: "Big Data",
  },
  {
    id: "GoalProgress",
    src: "https://plus.unsplash.com/premium_vector-1682308668096-7293690b5500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3Jlc3N8ZW58MHx8MHx8fDA%3D",
    alt: "Progress",
  },
]

export const ASSET_DIFF_LABELS = ["總資產淨值", "總持倉", "總現金"] as const

export const GOAL_PROGRESS_LABELS = ["已達成進度", "剩餘進度", "Goal"] as const

export const FORM_TYPES = Object.freeze({
  MAIN: "main",
  LOG: "log",
  PLAN: "plan",
  AUTH: "auth",
  NOTE: "note",
  REVIEW: "review",
})
