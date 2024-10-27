import NumberTicker from "@/components/NumberTicker"
import { NoteTooltip } from "@/components/Tooltip"
import { cn } from "@/lib/utils"
import FundPieChart from "./FundPieChart"
import { LightbulbIcon } from "lucide-react"

const getGradientClassForValue = (value: number) => {
  if (value <= 25) return "from-slate-500 to-sky-500"
  if (value <= 50) return "from-sky-500 to-teal-500"
  if (value <= 75) return "from-teal-500 to-green-500"
  if (value <= 100) return "from-green-500 to-yellow-500"
  if (value <= 150) return "from-yellow-500 to-orange-500"
  if (value <= 200) return "from-orange-500 to-pink-500"
  if (value <= 250) return "from-pink-500 to-rose-500"
  return "from-rose-500 to-red-700"
}

export default function TradeFundBase({
  fundBase,
}: {
  fundBase: { name: string; value: number }[]
}) {
  // TODO: Calculate level => 持股總成本/資金
  const level = 70

  return (
    <div className={cn("section flex flex-col px-4")}>
      <div className="flex items-center justify-around gap-4">
        <div className="hidden sm:block">
          <h2 className="centerAll mb-2 text-center text-lg font-medium md:text-xl">
            積極度
            <NoteTooltip tooltip="0 ~ 250%" />
          </h2>
          <div className="centerAll mb-2 gap-1">
            {[0, 50, 100, 150, 200].map((value, index) => (
              <LightbulbIcon
                key={index}
                className={cn(
                  "aspect-square h-4 w-4 md:h-5 md:w-5",
                  level >= value && "text-yellow-600",
                )}
              />
            ))}
          </div>
          <p
            className={cn(
              "center-all whitespace-pre-wrap text-2xl font-medium tracking-tighter md:text-4xl lg:text-6xl",
              "bg-gradient-to-r bg-clip-text text-transparent",
              getGradientClassForValue(level),
            )}
          >
            <NumberTicker
              value={level}
              className={cn("bg-inherit px-2 text-inherit")}
              // delay={500}
            />
            <span>%</span>
          </p>
        </div>

        <FundPieChart data={fundBase} />
      </div>
    </div>
  )
}
