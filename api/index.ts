import { DEFAULT_LAYOUTS, DEFAULT_TOOLBOX, DEFAULT_COMPACTTYPE } from "@/constants"
import { ResponsiveLayouts, CompactType, DynamicChartProps } from "@/types/chart"

// !All dummy datas
export const blogs = [
  {
    id: "1",
    title: "Forest Adventure",
    description:
      "Explore the dense forests and experience the thrill of adventure. Dense forest with sunlight filtering through trees, Dense forest with sunlight filtering through trees, Dense forest with sunlight filtering through trees",
    coverUrl:
      "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Dense forest with sunlight filtering through trees",
    author: {
      id: "23",
      name: "John Doe",
      url: "https://unsplash.com/@johndoe",
    },
    date: new Date().toISOString().split("T")[0],
    tags: ["Nature", "Adventure"],
  },
  {
    id: "2",
    title: "Valley of life",
    description: "A peaceful valley where life flourishes amidst nature.",
    coverUrl:
      "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Lush green valley with mountains in the background",
    author: {
      id: "123q3",
      name: "Jane Smith",
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .split("T")[0],
    tags: ["Nature", "Peaceful"],
  },
  {
    id: "3",
    title: "Sala behta hi jayega",
    description: "A tranquil river flowing gently through the forest.",
    coverUrl:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "River flowing through a dense forest",
    author: {
      id: "14123",
      name: "Amit Kumar",
      url: "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .split("T")[0],
    tags: ["Nature", "River"],
  },
  {
    id: "4",
    title: "Camping is for pros",
    description:
      "Experience the ultimate camping adventure with professionals.",
    coverUrl:
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Camping tent set up in a scenic forest",
    author: {
      id: "1134223",
      name: "Lisa Ray",
      url: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 3))
      .toISOString()
      .split("T")[0],
    tags: ["Camping", "Adventure"],
  },
  {
    id: "5",
    title: "The road not taken",
    description:
      "Journey through paths less traveled and discover hidden gems.",
    coverUrl:
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "A winding road through a forest",
    author: {
      id: "1243",
      name: "Robert Frost",
      url: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 4))
      .toISOString()
      .split("T")[0],
    tags: ["Nature", "Journey"],
  },
  {
    id: "6",
    title: "Forrest Explore",
    description: "Dive deep into the unknown forests and explore the wildlife.",
    coverUrl:
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Dense forest with a path leading into it",
    author: {
      id: "123",
      name: "David Green",
      url: "https://unsplash.com/@davidgreen",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 5))
      .toISOString()
      .split("T")[0],
    tags: ["Exploration", "Wildlife"],
  },
]

export const userLayouts: {
  layouts: ResponsiveLayouts
  toolbox: ResponsiveLayouts
  compactType: CompactType
} = {
  layouts: DEFAULT_LAYOUTS,
  toolbox: DEFAULT_TOOLBOX,
  compactType: DEFAULT_COMPACTTYPE,
}
export const chartProps: DynamicChartProps = {
  ProfitChart: [
    { month: "Jan", TWSE: 23, Me: 8, 相對表現: ((8 / 23) * 100).toFixed(1) },
    { month: "Feb", TWSE: 27, Me: 10, 相對表現: ((10 / 27) * 100).toFixed(1) },
    { month: "Mar", TWSE: 32, Me: 18, 相對表現: ((18 / 32) * 100).toFixed(1) },
    { month: "Apr", TWSE: 35, Me: 20, 相對表現: ((20 / 35) * 100).toFixed(1) },
    { month: "May", TWSE: 30, Me: 22, 相對表現: ((22 / 30) * 100).toFixed(1) },
    { month: "Jun", TWSE: 28, Me: 24, 相對表現: ((24 / 28) * 100).toFixed(1) },
  ],
  RealizedPnlChart: [
    { week: "June/1", 成交筆數: 118, 報酬率: 3, 獲利筆數: 78 },
    { week: "June/2", 成交筆數: 11, 報酬率: 16.2, 獲利筆數: 4 },
    { week: "June/3", 成交筆數: 10, 報酬率: -2, 獲利筆數: 1 },
    { week: "June/4", 成交筆數: 20, 報酬率: 0.21, 獲利筆數: 10 },
  ],
  TradeFundBase: [
    { name: "現金水位", value: 200000 },
    { name: "持倉部位", value: 800000 },
  ],
  TradeLog: [
    {
      _id: "1",
      type: "多單",
      action: "現股買進",
      target: { symbol: "AAPL", name: "Apple. Inc" },
      date: "12:09",
      price: 150.25,
      quantity: 1000,
      comment: "在開盤時買入",
    },
    {
      _id: "2",
      type: "多單",
      action: "現股賣出",
      target: { symbol: "AAPL", name: "Apple. Inc" },
      date: "09:10",
      price: 155.75,
      quantity: 100,
      comment: "在高點賣出",
    },
    {
      _id: "3",
      type: "多單",
      action: "融資買進",
      target: { symbol: "GOOGL", name: "Google. corp" },
      date: "11:20",
      price: 2700.5,
      quantity: 50,
      comment: "使用保證金進行買進",
    },
    {
      _id: "4",
      type: "多單",
      action: "融資賣出",
      target: { symbol: "GOOGL", name: "Google. corp" },
      date: "12:32",
      price: 2725.0,
      quantity: 50,
      comment: "持有一天後賣出",
    },
    {
      _id: "5",
      type: "空單",
      action: "沖買",
      target: { symbol: "TSLA", name: "Tsela. Inc" },
      date: "09:55",
      price: 900.0,
      quantity: 20,
    },
    {
      _id: "6",
      type: "空單",
      action: "沖賣",
      target: { symbol: "TSLA", name: "Tsela. Inc" },
      date: "09:50",
      price: 910.0,
      quantity: 20,
    },
  ],
  TradeSummary: {
    asset: {
      _id: "1",
      totalCost: 1000000,
      totalMarketPrice: 3000000,
      position: [
        { asset_id: "2486", asset_name: "一詮", quantity: 4000, cost: 137 },
        { asset_id: "8103", asset_name: "瀚荃", quantity: 4000, cost: 71 },
        { asset_id: "9958", asset_name: "世紀剛", quantity: 1000, cost: 223 },
        { asset_id: "3037", asset_name: "欣興", quantity: 1000, cost: 160 },
      ],
    },
    currentPrices: [
      { symbol: "2486", name: "一詮", closePrice: 128 },
      { symbol: "8103", name: "瀚荃", closePrice: 55.1 },
      { symbol: "9958", name: "世紀剛", closePrice: 208 },
      { symbol: "3037", name: "欣興", closePrice: 161.5 },
    ],
  },
  TradePlan: [
    {
      _id: "123456789",
      type: "多單",
      target: {
        symbol: "AAPL",
        name: "Apple Inc.",
      },
      action: "建倉",
      entryPrice: 113,
      targetPrice: 150,
      stop: {
        type: "停損",
        price: 100,
      },
      expectation: 150 / 100,
      isExecuted: false,
    },
    {
      _id: "987654321",
      type: "空單",
      target: {
        symbol: "TSLA",
        name: "Tesla, Inc.",
      },
      action: "建倉",
      entryPrice: 1000,
      targetPrice: 1194,
      stop: {
        type: "停損",
        price: 900,
      },
      expectation: 1194 / 900,
      isExecuted: false,
      comment: "some comment",
    },
    {
      _id: "123456780",
      type: "多單",
      target: {
        symbol: "AAPL",
        name: "Apple Inc.",
      },
      action: "出場",
      entryPrice: 155,
      targetPrice: 180,
      stop: { type: "停利", price: 150 },
      expectation: 180 / 150,
      isExecuted: true,
    },
  ],
  GoalProgress: [
    {
      name: "Goal",
      value: 100,
      color: "var(--chart-3)",
      actualValue: 1000000,
    },
    {
      name: "已達成進度",
      value: 40,
      color: "var(--chart-2",
      actualValue: 400000,
    },
    {
      name: "剩餘進度",
      value: 60,
      color: "var(--chart-1",
      actualValue: 600000,
    },
  ],
}
// !If replace this dummy data,  remove remotePatterns in nextConfig
export const persons = [
  {
    id: "126542",
    url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Adrian Paul",
    description: "COO & Co-Founder",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },

  {
    id: "765752",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Flualy Cual",
    description: "Founder & CEO",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
  {
    id: "45673",
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
]
