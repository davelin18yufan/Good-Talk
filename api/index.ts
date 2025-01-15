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
    id: "1265412",
    url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Adrian Paul",
    aka: "Someone Prefer to be called Captain", 
    description:
      "I'm Adrian Paul, a passionate entrepreneur and tech enthusiast. As the COO & Co-Founder of Omfi, I'm dedicated to empowering individuals and businesses to take control of their finances and achieve their financial goals. With extensive experience in the fintech industry, I'm committed to driving innovation and making a positive impact on the world. When I'm not working, you can find me exploring new hiking trails, practicing yoga, or simply enjoying the beauty of nature.",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },
  {
    id: "765752",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Flualy Cual",
    description:
      "Founder & CEO, enthusiast of nature, also known as Omfi's best friend",
    aka: "Founder & CEO of Omfi",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
  {
    id: "45673",
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Naymur Rahman",
    aka: "JS Wizard",
    description: "JavaScript Enthusiast and Full-Stack Developer",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
]

// dummy article
export const article = {
  id: "199",
  title: "The Art of Nature Photography",
  description:
    "Discover the art of nature photography and capture the beauty of the natural world.",
  content: `<h3 style="text-align: center">Rich Text Editor</h3><p>A modern WYSIWYG rich text editor based on <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://github.com/scrumpy/tiptap">tiptap</a> and <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> for Reactjs</p><p></p><p style="text-align: center"></p><div style="text-align: center;" class="image"><img height="auto" src="https://picsum.photos/1920/1080.webp?t=1" align="center" width="500"></div><p></p><div data-type="horizontalRule"><hr></div><h2>Demo</h2><p>👉<a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://reactjs-tiptap-editor.vercel.app/">Demo</a></p><h2>Features</h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support (vi, en, zh, pt)</p></li><li><p>React support</p></li><li><p>Slash Commands</p></li><li><p>Multi Column</p></li><li><p>TailwindCss</p></li><li><p>Support emoji</p></li><li><p>Support iframe</p></li><li><p>Support mermaid</p></li></ul><h2>Installation</h2><pre><code class="language-bash">pnpm add reactjs-tiptap-editor</code></pre><p></p>`,
  coverUrl:
    "https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  altText: "A winding road through a forest",
  author: {
    id: "12542",
    url: "https://images.unsplash.com/photo-1702884162674-b05320817c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amber Huang",
    description:
      "Founder & CEO of Ambrosia, a company that specializes in AI-powered financial analysis and portfolio management.",
    aka: "Lider of Ambrosia and speaker of Ambrosia",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },
  date: "2022-01-01",
  category: ["Finance", "Business"],
}

export const articles = [
  {
    id: "187",
    title: "The Art of Nature Photography",
    description:
      "Discover the art of nature photography and capture the beauty of the natural world.",
    content: `<h3 style="text-align: center">Rich Text Editor</h3><p>A modern WYSIWYG rich text editor based on <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://github.com/scrumpy/tiptap">tiptap</a> and <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> for Reactjs</p><p></p><p style="text-align: center"></p><div style="text-align: center;" class="image"><img height="auto" src="https://picsum.photos/1920/1080.webp?t=1" align="center" width="500"></div><p></p><div data-type="horizontalRule"><hr></div><h2>Demo</h2><p>👉<a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://reactjs-tiptap-editor.vercel.app/">Demo</a></p><h2>Features</h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support (vi, en, zh, pt)</p></li><li><p>React support</p></li><li><p>Slash Commands</p></li><li><p>Multi Column</p></li><li><p>TailwindCss</p></li><li><p>Support emoji</p></li><li><p>Support iframe</p></li><li><p>Support mermaid</p></li></ul><h2>Installation</h2><pre><code class="language-bash">pnpm add reactjs-tiptap-editor</code></pre><p></p>`,
    coverUrl:
      "https://images.unsplash.com/photo-1734375063393-2ca2050512cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "A winding road through a forest",
    author: {
      id: "1265442",
      url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Adrian Paul",
      aka: "COO & Co-Founder",
      description: "COO & Co-Founder",
      tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
    },
    date: "2023-11-06",
    category: ["Nature", "Photography"],
  },
  {
    id: "224",
    title: "The Art of Urban Gardening",
    description:
      "Discover the art of urban gardening and create vibrant oases in the city.",
    content: `<h3 style="text-align: center">Urban Gardening</h3><p>Grow your own food in the heart of the city and create a sustainable oasis.</p><div style="text-align: center;" class="image"><img height="auto" src="https://picsum.photos/1920/1080.webp?t=2" align="center" width="500"></div><p></p><h2>Benefits</h2><ul><li><p>Fresh and healthy food</p></li><li><p>Reduced carbon footprint</p></li><li><p>Community building</p></li><li><p>Stress relief</p></li><li><p>Mental wellbeing</p></li><li><p>Personal growth</p></li></ul><h2>Tips</h2><ul><li><p>Choose the right plants</p></li><li><p>Prepare the soil</p></li><li><p>Water wisely</p></li><li><p>Harvest your bounty</p></li><li><p>Share your success</p></li></ul>`,
    coverUrl:
      "https://images.unsplash.com/photo-1532751203793-812308a10d8e?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "A winding road through a forest",
    author: {
      id: "16543",
      url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Shahriar Rahman",
      description: "Head of Marketing in Capital One",
      aka: "Head of Marketing in Capital One",
      tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
    },
    date: "2024-01-06",
    category: ["Food", "Gardening"],
  },
  {
    id: "777",
    title: "The Art of Storytelling",
    description:
      "Learn the art of storytelling and create captivating stories that inspire and motivate.",
    content: `<h3 style="text-align: center">Storytelling</h3><p>Storytelling is an art that has the power to captivate and inspire people.</p><div style="text-align: center;" class="image"><img height="auto" src="https://picsum.photos/1920/1080.webp?t=3" align="center" width="500"></div><p></p><h2>Benefits</h2><ul><li><p>Engage audiences</p></li><li><p>Inspire and motivate</p></li><li><p>Build connections</p></li><li><p>Communicate effectively</p></li><li><p>Develop critical thinking</p></li></ul><h2>Tips</h2><ul><li><p>Know your audience</p></li><li><p>Use descriptive language</p></li><li><p>Use conflict and tension</p></li><li><p>Use dialogue</p></li><li><p>Use imagery</p></li></ul>`,
    coverUrl:
      "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "A winding road through a forest",
    author: {
      id: "126",
      url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Nicole Smith",
      aka: "Experienced Writer",
      description: "Experienced Writer",
      tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
    },
    date: "2024-04-21",
    category: ["Business", "Leadership"],
  },
]

