import SectionTitle from "./SectionTitle"
import { Tabs } from "@/components/Tabs"

import { cn, formatNumber } from "@/lib/utils"
// import { useDate } from "@/store/date"
import { Log as LogType } from "@/types/chart"
import { Badge, badgeVariants } from "@/components/ui/badge"
import TooltipCard from "@/components/Tooltip"

function Log({ log }: { log: any }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between overflow-hidden rounded-lg border-l-8 shadow-md",
        log.type === "多單" ? "border-rose-400" : "border-green-400",
      )}
    >
      <div className="p-2 text-center text-slate-400">{log.date}</div>
      <div className="flex-1 p-2.5 text-start">
        <Badge variant="default">
          <h3
            className={cn(
              "text-lg font-semibold",
              log.type === "多單" ? "text-rose-600" : "text-green-600",
            )}
          >
            {log.action}
          </h3>
        </Badge>
        <div className="mt-2 flex w-full items-center gap-4">
          <TooltipCard
            content={{ trigger: log.target.name, tooltip: log.target.symbol }}
            badgeVariant="secondary"
          />
          <TooltipCard
            content={{
              trigger: `$${formatNumber(log.price)}`,
              tooltip: "成交價",
            }}
            badgeVariant="secondary"
          />
          <TooltipCard
            content={{
              trigger: formatNumber(log.quantity),
              tooltip: "成交數量",
            }}
            badgeVariant="secondary"
          />
          <button
            className={cn(
              badgeVariants({ variant: "outline" }),
              "text-md ml-auto px-2.5 text-slate-800 active:bg-slate-100",
            )}
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
    <div className="h-80">
      <Tabs
        tabs={tabs}
        // activeTabClassName="bg-gray-200 dark:bg-zinc-800 rounded-full"
        contentClassName="mt-2"
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
    <div className={cn("section p-4", className)}>
      <SectionTitle title="交易紀錄" formType="log" />
      <AllLogs logs={logs}/>
    </div>
  )
}

export default TradeLog
