"use client"

import { useState } from "react"
import Tooltip from "@/components/Tooltip"
import { cn } from "@/lib/utils"
import { IconExclamationCircle } from "@tabler/icons-react"
import { Separator } from "../ui/separator"
import { FundPieChart, NumberDiffWithButton, LiquidProgress } from "."

export default function TradeFundBase({
  fundBase,
}: {
  fundBase: { name: string; value: number }[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // TODO: Fetch and Calculate diffs
  const diffs = [
    { label: "總資產淨值", diff: 0.0564, number: 1000000 },
    { label: "總持倉", diff: -0.114, number: 800000 },
    { label: "總現金", diff: 0.0029, number: 200000 },
  ]

  /**
   * Advances the current index to the next item in the diffs array.
   */
  const handleSwitchClick = () => {
    setCurrentIndex((currentIndex + 1) % diffs.length)
  }

  // TODO: Calculate level => 持股總成本/資金
  const level = 70

  return (
    <section className={cn("section", "px-2")}>
      <div className="flex flex-col items-center justify-around gap-3">
        <div className="flex w-full flex-wrap items-stretch gap-2">
          {/* Aggressiveness */}
          <div className="bg-primary hidden h-full flex-col rounded-md px-3 py-1.5 shadow-sm sm:flex">
            <h5 className="mb-2 flex w-full items-center gap-2 text-start text-base font-medium md:text-lg">
              積極度
              <Tooltip
                content={<span className="w-fit text-nowrap">0% ~ 250%</span>}
                side="right"
                delayTransition={level}
              >
                <IconExclamationCircle width={16} height={16} />
              </Tooltip>
            </h5>

            <LiquidProgress percent={90} className="px-2.5" />
          </div>

          {/* Net Asset Value */}
          <div className="bg-primary flex flex-1 flex-col justify-between rounded-md px-3 py-1.5 shadow-sm">
            <h5 className="mb-2 flex w-full items-center gap-2 text-start text-base font-medium md:text-lg">
              {diffs[currentIndex].label}
              <Tooltip
                content={
                  <span className="w-fit text-nowrap">
                    {diffs.map((d) => d.label).join("/")}
                  </span>
                }
                side="right"
                delayTransition={200}
              >
                <IconExclamationCircle width={16} height={16} />
              </Tooltip>
            </h5>
            <NumberDiffWithButton
              handleSwitchClick={handleSwitchClick}
              {...diffs[currentIndex]}
              number={diffs[currentIndex].number}
              diff={diffs[currentIndex].diff}
              className="flex-1"
            />
          </div>
        </div>

        <Separator />

        <FundPieChart data={fundBase} h={200} />
      </div>
    </section>
  )
}
