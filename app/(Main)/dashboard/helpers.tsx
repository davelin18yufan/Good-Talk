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
  () => import("@/components/dashboard/RealizedPnlChart"),
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

// Define chart components map
type ChartComponentProps = {
  ProfitChart: ProfitChartData[];
  RealizedPnlChart: PnLChartData[];
  TradeFundBase: TradeFundData[];
  TradeLog: Log[];
  TradeSummary: TradeSummaryData;
  TradePlan: Plan[];
  GoalProgress: GoalProgressData[];
};

const chartComponentsMap = new Map<keyof ChartComponentProps, (props: any) => ReactElement>([
  ["ProfitChart", (data) => <ProfitChart data={data} />],
  ["RealizedPnlChart", (pnLData) => <RealizedPnlChart pnLData={pnLData} />],
  ["TradeFundBase", (fundBase) => <TradeFundBase fundBase={fundBase} />],
  ["TradeLog", (logs) => <TradeLog logs={logs} />],
  ["TradeSummary", (summary) => <TradeSummary summary={summary} />],
  ["TradePlan", (plans) => <TradePlan plans={plans} />],
  ["GoalProgress", (progress) => <GoalProgress progress={progress} />],
]);
export const renderChart = (
  chartId: keyof DynamicChartProps,
  chartProps: DynamicChartProps,
): ReactElement => {
  const renderComponent = chartComponentsMap.get(chartId)

  if (!renderComponent) {
    return <div>No chart found</div>
  }

  return renderComponent(chartProps[chartId])
}
