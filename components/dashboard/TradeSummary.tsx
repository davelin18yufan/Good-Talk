import { HomeIcon } from "lucide-react"
import SectionTitle from "./SectionTitle"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"
import { cn, formatNumber } from "@/lib/utils"
import { type TradeSummaryData } from "@/types/chart"

// TODO: Asset and CurrentPrices type
const TradeSummary = ({ summary }: { summary: TradeSummaryData }) => {
  const { asset, currentPrices } = summary
  const { totalCost, totalMarketPrice, position } = asset
  // TODO: 未實現應該從庫存去計算，水位＝庫存成本/資產
  const unrealizedProfit = (totalMarketPrice - totalCost).toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  )

  return (
    <div className={cn("section p-4")}>
      <SectionTitle
        title="我的庫存"
        icon={{ icon: <HomeIcon className="h-5 w-5" />, name: "gear" }}
        formType="main"
      />

      {/* using wrapper for scrolling and max-height */}
      <div className="relative max-h-[30vh] overflow-y-scroll overscroll-contain">
        <Table>
          <TableHeader>
            <TableRow className="*:lg:px-0">
              <TableHead>ID</TableHead>
              <TableHead>標的</TableHead>
              <TableHead>成本</TableHead>
              <TableHead>現價</TableHead>
              <TableHead>數量</TableHead>
              <TableHead className="text-right">損益</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {position.map((p: any) => {
              let profit = ""
              const marketPrice = currentPrices.find(
                (price: any) => price.symbol === p.asset_id,
              )
              if (marketPrice) {
                profit = (
                  (marketPrice?.closePrice - p.cost) *
                  p.quantity
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
              }

              return (
                <TableRow
                  className="text-xs text-slate-500 *:lg:px-0"
                  key={p.asset_id}
                >
                  <TableCell>{p.asset_id}</TableCell>
                  <TableCell>{p.asset_name}</TableCell>
                  <TableCell>{p.cost}</TableCell>
                  <TableCell>{marketPrice?.closePrice}</TableCell>
                  <TableCell>{formatNumber(p.quantity)}</TableCell>
                  {profit.length ? (
                    <TableCell className="text-right">{profit}</TableCell>
                  ) : (
                    <TableCell className="animate-pulse text-right text-slate-400">
                      Calculating..
                    </TableCell>
                  )}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      <Table>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-lg">
              未實現損益
            </TableCell>
            <TableCell className="text-right text-red-500">
              {unrealizedProfit}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default TradeSummary
