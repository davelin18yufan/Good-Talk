import SectionTitle from "./SectionTitle"
import { cn } from "@/lib/utils"
import { Plan } from "@/types/chart"
import { CheckIcon, CheckCheck } from "lucide-react"
import ShineBorder from "@/components/buttons/ShineBorder"
import SubscribeButton from "@/components/buttons/SubscribeButton"
import { ResponsiveContainer } from "recharts"

function ExpectationBar({
  entryPrice,
  targetPrice,
  stopPrice,
}: {
  entryPrice: number
  targetPrice: number
  stopPrice: number
}) {
  const potentialProfit = targetPrice - entryPrice
  const potentialLoss = entryPrice - stopPrice
  const denominator = potentialLoss + potentialProfit
  const expectation = ((potentialProfit / denominator) * 100).toFixed(1)
  return (
    <div className="flex-center gap-2 p-0.5 text-center align-middle text-sm font-bold">
      <div className="flex w-24 items-center overflow-hidden rounded-md md:w-28">
        <div
          className={"bg-rose-400 py-1"}
          style={{ flexGrow: `${potentialProfit / denominator}` }}
        >
          賺
        </div>
        <div
          className="bg-green-400 py-1"
          style={{ flexGrow: `${potentialLoss / denominator}` }}
        >
          賠
        </div>
      </div>
      <p>比：{expectation}%</p>
    </div>
  )
}

function PlanCard({
  plan: {
    type,
    target,
    action,
    targetPrice,
    entryPrice,
    stop,
    isExecuted,
    comment,
  },
}: {
  plan: Plan
}) {
  return (
    <ShineBorder
      className={cn("min-h-fit w-full py-2 px-2.5", {
        "!bg-rose-200": type === "多單",
        "!bg-green-200": type === "空單",
      })}
      borderWidth={4}
      duration={10}
      color={`${type === "多單" ? ["rgb(251 113 133)", "rgb(225 29 72)"] : ["rgb(74 222 128)", "rgb(22 163 74)"]}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold lg:text-lg">
          {target.name} ({target.symbol})
        </h2>
        <span
          className={cn("text-sm text-slate-600", {
            "text-rose-600": type === "多單",
            "text-green-600": type === "空單",
          })}
        >
          {type}
          {action}
        </span>
      </div>

      <div
        className={cn(
          "mt-2 flex flex-wrap items-center justify-start gap-2 border-l-2 pl-2 text-slate-800",
          {
            "border-l-rose-400": type === "多單",
            "border-l-green-400": type === "空單",
          },
        )}
      >
        <p>進場價: {entryPrice}</p>
        <p>目標價: {targetPrice}</p>
        <p>
          {stop.type}: {stop.price}
        </p>
        <ExpectationBar
          {...{ entryPrice, targetPrice, stopPrice: stop.price }}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className={`text-sm ${comment ? "text-sky-700" : "text-slate-700"} cursor-pointer`}
          disabled={!comment}
        >
          備註
        </button>
        <SubscribeButton
          buttonColor="transparent"
          buttonTextColor="#000000"
          subscribeStatus={isExecuted}
          initialText={
            <span className="group inline-flex items-center">
              未執行{" "}
              <CheckIcon className="ml-1 h-4 w-4 !transition-opacity duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center text-slate-600">
              <CheckCheck className="mr-2 h-4 w-4" />
              已執行{" "}
            </span>
          }
        />
      </div>
    </ShineBorder>
  )
}

function TradePlan({ plans }: { plans?: Plan[] }) {
  return (
    <section className={cn("section overflow-y-auto")}>
      <SectionTitle title="進出場規劃" formType="plan" />
      <div className="flex-center flex-col gap-0.5">
        {plans?.map((plan: any) => <PlanCard plan={plan} key={plan._id} />)}
      </div>
    </section>
  )
}

export default TradePlan
