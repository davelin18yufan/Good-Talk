import {
  DynamicChartProps,
  ProfitChartData,
  PnLChartData,
  TradeFundData,
  Log,
  TradeSummaryData,
  Plan,
  GoalProgressData,
} from "@/types/chart"
import dynamic from "next/dynamic"

// Dynamically import components
const ProfitChart = dynamic(() => import("@/components/dashboard/ProfitChart"))
const RealizedPnlChart = dynamic(() => import("@/components/dashboard/RealizedPnlChart"))
const TradeFundBase = dynamic(() => import("@/components/dashboard/TradeFundBase"))
const TradeLog = dynamic(() => import("@/components/dashboard/TradeLog"))
const TradeSummary = dynamic(() => import("@/components/dashboard/TradeSummary"))
const TradePlan = dynamic(() => import("@/components/dashboard/TradePlan"))
const GoalProgress = dynamic(() => import("@/components/dashboard/GoalProgress"), { ssr: false })

export const renderChart = (
  chartId: keyof DynamicChartProps,
  chartProps: DynamicChartProps,
) => {
  const props = chartProps[chartId]

  switch (chartId) {
    case "ProfitChart":
      return <ProfitChart data={props as ProfitChartData[]} />
    case "RealizedPnlChart":
      return <RealizedPnlChart pnLData={props as PnLChartData[]} />
    case "TradeFundBase":
      return <TradeFundBase fundBase={props as TradeFundData[]} />
    case "TradeLog":
      return <TradeLog logs={props as Log[]} />
    case "TradeSummary":
      return <TradeSummary summary={props as TradeSummaryData} />
    case "TradePlan":
      return <TradePlan plans={props as Plan[]} />
    case "GoalProgress":
      return <GoalProgress progress={props as GoalProgressData[]} />
    default:
      return <div>No chart found</div>
  }
}
