import {
  ProfitChart,
  RealizedPnlChart,
  TradeFundBase,
  TradeLog,
  TradeSummary,
  TradePlan,
  DatePicker,
} from "@/components/dashboard"
import {
  DynamicChartProps,
  ProfitChartData,
  PnLChartData,
  TradeFundData,
  Log,
  TradeSummaryData,
  Plan,
} from "@/types/chart"
import dynamic from "next/dynamic"

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
    case "DatePicker":
      return <DatePicker />
    default:
      return <div>No chart found</div>
  }
}
