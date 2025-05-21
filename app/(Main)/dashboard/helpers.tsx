import NoResult from "@/components/NoResult"
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
import { ReactElement } from "react"

// Dynamically import components
const ProfitChart = dynamic(() => import("@/components/dashboard/ProfitChart"))
const RealizedPnlChart = dynamic(
  () => import("@/components/dashboard/RealizedPnLChart"),
)
const TradeFundBase = dynamic(
  () => import("@/components/dashboard/TradeFundBase"),
)
const TradeLog = dynamic(() => import("@/components/dashboard/TradeLog"))
const TradeSummary = dynamic(
  () => import("@/components/dashboard/TradeSummary"),
)
const TradePlan = dynamic(() => import("@/components/dashboard/TradePlan"))
const GoalProgress = dynamic(
  () => import("@/components/dashboard/GoalProgress"),
  { ssr: false },
)

// Define chart components map with specific type mapping
interface ChartComponentMap {
  ProfitChart: (data: ProfitChartData[]) => ReactElement
  RealizedPnlChart: (pnLData: PnLChartData[]) => ReactElement
  TradeFundBase: (fundBase: TradeFundData[]) => ReactElement
  TradeLog: (logs: Log[]) => ReactElement
  TradeSummary: (summary: TradeSummaryData) => ReactElement
  TradePlan: (plans: Plan[]) => ReactElement
  GoalProgress: (progress: GoalProgressData[]) => ReactElement
}

const chartComponentsMap = new Map<
  keyof ChartComponentMap,
  ChartComponentMap[keyof ChartComponentMap]
>([
  ["ProfitChart", (data: ProfitChartData[]) => <ProfitChart data={data} />],
  [
    "RealizedPnlChart",
    (pnLData: PnLChartData[]) => <RealizedPnlChart pnLData={pnLData} />,
  ],
  [
    "TradeFundBase",
    (fundBase: TradeFundData[]) => <TradeFundBase fundBase={fundBase} />,
  ],
  ["TradeLog", (logs: Log[]) => <TradeLog logs={logs} />],
  [
    "TradeSummary",
    (summary: TradeSummaryData) => <TradeSummary summary={summary} />,
  ],
  ["TradePlan", (plans: Plan[]) => <TradePlan plans={plans} />],
  [
    "GoalProgress",
    (progress: GoalProgressData[]) => <GoalProgress progress={progress} />,
  ],
])

export const renderChart = (
  chartId: keyof DynamicChartProps,
  chartProps: DynamicChartProps,
): ReactElement => {
  const renderComponent = chartComponentsMap.get(chartId)

  if (!renderComponent) {
    return <div>No chart found</div>
  }

  const props = chartProps[chartId]

  // 若 props 為 undefined，就不渲染
  if (!props) {
    return (
      <NoResult
        title="Oops! Something went wrong."
        description="The chart you selected is not reachable, try again."
        link="/dashboard"
        linkTitle="Refresh"
      />
    )
  }

  // 類型縮小：顯式斷言 props 為對應類型
  return renderComponent(props as never)
}
