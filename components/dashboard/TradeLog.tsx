import SectionTitle from "./SectionTitle"
import { Tabs } from "@/components/Tabs"

import { cn, formatNumber } from "@/lib/utils"
// import { useDate } from "@/store/date"
import { Log as LogType } from "@/types/chart"
import { Badge, badgeVariants } from "@/components/ui/badge"
import Tooltip from "@/components/Tooltip"

function Log({ log }: { log: LogType }) {
  const logCardItems = [
    {
      tooltipContent: log.target.symbol,
      value: log.target.name,
      label: "商品名稱",
    },
    {
      tooltipContent: "成交價",
      value: `$${formatNumber(log.price)}`,
      label: "價格",
    },
    {
      tooltipContent: "成交數量",
      value: formatNumber(log.quantity),
      label: "數量",
    },
  ]
  return (
    <div
      className={cn(
        "flex items-center justify-between overflow-hidden rounded-lg border-l-8 shadow-md",
        log.type === "多單" ? "border-rose-400" : "border-green-400",
      )}
    >
      <div className="w-14 p-2 text-center text-slate-400">{log.date}</div>
      <div className="flex-1 px-1.5 py-2.5 text-start">
        <Badge
          variant="default"
          className="bg-slate-300/50 dark:bg-slate-500/50"
        >
          <h3
            className={cn(
              "text-lg font-semibold",
              log.type === "多單" ? "text-rose-600" : "text-green-600",
            )}
          >
            {log.action}
          </h3>
        </Badge>
        <div className="grid w-full grid-cols-4 items-center gap-3 lg:gap-5">
          {logCardItems.map((item, index) => (
            <Tooltip
              key={index}
              content={
                <span className="text-nowrap">{item.tooltipContent}</span>
              }
              side="right"
            >
              <Badge
                variant="secondary"
                className="w-full truncate text-center p-1"
              >
                {item.value}
              </Badge>
            </Tooltip>
          ))}
          {/* //TODO: Review Dialogue */}
          <button
            className={cn(
              badgeVariants({ variant: "outline" }),
              "text-md justify-self-end px-2.5 text-slate-800 active:bg-slate-100",
            )}
            onMouseDown={(e) => e.stopPropagation()}
          >
            復盤
          </button>
        </div>
      </div>
    </div>
  )
}

function AllLogs({ logs }: { logs: LogType[] }) {
  const tabs = [
    {
      title: "全部",
      value: "all",
      content: logs.map((log) => <Log key={log._id} log={log} />),
    },
    {
      title: "多單",
      value: "多單",
      content: logs
        .filter((log) => log.type === "多單")
        .map((log) => <Log key={log._id} log={log} />),
    },
    {
      title: "空單",
      value: "空單",
      content: logs
        .filter((log) => log.type === "空單")
        .map((log) => <Log key={log._id} log={log} />),
    },
  ]

  return (
    <div className="h-full">
      <Tabs
        tabs={tabs}
        activeTabClassName="bg-gray-200 dark:bg-zinc-800 rounded-full"
        contentClassName="pt-2"
        containerClassName="gap-2"
      />
    </div>
  )
}

const TradeLog = ({
  className,
  logs,
}: {
  className?: string
  logs: LogType[]
}) => {
  // TODO: fetch log by selectDate
  // const { selectDate } = useDate((store) => store.selectDate)
  // const trades = await getTradeLog(selectDate)
  return (
    <div className={cn("section", className)}>
      <SectionTitle title="交易紀錄" formType="log" />
      <AllLogs logs={logs} />
    </div>
  )
}

export default TradeLog
