import { Charts } from "@/constants"

export type CompactType = "horizontal" | "vertical" | null

//* Atomic type
export type Target = {
  symbol: string
  name: string
}

export type Action = {
  type: string
  action: string
}

export type Position = {
  asset_id: string
  asset_name: string
  quantity: number
  cost: number
}

//* List（Actions, PlanTypes, StopTypes, LogTypes）
export const actions = ["建倉", "加碼", "平倉", "出場"] as const
export const planTypes = ["多單", "空單"] as const
export const stopTypes = ["停損", "停利"] as const
export const logTypes = [
  "現股買進",
  "現股賣出",
  "融資買進",
  "融資賣出",
  "沖買",
  "沖賣",
] as const

// Reference
type PlanType = (typeof planTypes)[number]
type ActionType = (typeof actions)[number]
type StopType = (typeof stopTypes)[number]
type LogType = (typeof logTypes)[number]

//* Moleculic type
export type CurrentPrices = {
  symbol: string
  name: string
  closePrice: number
}[]

export type Asset = {
  _id: string
  totalCost: number
  totalMarketPrice: number
  position: Position[]
}

export type Plan = {
  _id: string
  type: PlanType
  target: Target
  action: ActionType
  entryPrice: number
  targetPrice: number // 目標價
  expectation: number // 期望值
  stop: {
    type: StopType
    price: number
  }
  isExecuted: boolean
  comment?: string
}

//* Component
export type Log = {
  _id: string
  type: PlanType
  action: LogType
  target: Target
  date: string // 紀錄時間
  price: number
  quantity: number
  comment?: string
}

export type PnLChartData = {
  week: string
  成交筆數: number
  報酬率: number
  獲利筆數: number
}
export type PnLChartDataKeys = Exclude<keyof PnLChartData, "week">

export type ProfitChartData = {
  month: string
  TWSE: number
  Me: number
  相對表現: string
}

export type TradeFundData = {
  name: string
  value: number
}

export type TradeSummaryData = {
  asset: Asset
  currentPrices: CurrentPrices
}

// charts with data
export interface ChartProps {
  ProfitChart: ProfitChartData[]
  RealizedPnlChart: PnLChartData[]
  TradeFundBase: TradeFundData[]
  TradeLog: Log[]
  TradeSummary: TradeSummaryData
  TradePlan: Plan[]
}

export type ChartID = (typeof Charts)[number]
export type DynamicChartProps = Partial<{
  [K in ChartID]: K extends keyof ChartProps ? ChartProps[K] : never
}>
