/* eslint-disable no-shadow */
"use client"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts"
import { GoalProgressData, GoalProgressLabel } from "@/types/chart"
import { useEffect, useRef, useState } from "react"
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent"

const RADIAN = Math.PI / 180

const needle = (
  value: number,
  data: GoalProgressData[],
  cx: number | string,
  cy: number | string,
  iR: number,
  oR: number,
  color: string,
) => {
  let total = 0
  data.forEach((v) => {
    total += v.value
  })
  const ang = 180.0 * (1 - value / total)
  const length = (iR + 2 * oR) / 3
  const sin = Math.sin(-RADIAN * ang)
  const cos = Math.cos(-RADIAN * ang)
  const r = 5
  const x0 = +cx + 5
  const y0 = +cy + 5
  const xba = x0 + r * sin
  const yba = y0 - r * cos
  const xbb = x0 - r * sin
  const ybb = y0 + r * cos
  const xp = x0 + length * cos
  const yp = y0 + length * sin

  // it;s an array, so key prop is required
  return (
    <>
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />
    </>
  )
}

function CustomTooltip<TValue extends ValueType, TName extends NameType>({
  active = false,
  payload = [],
  label = "",
}: TooltipProps<TValue, TName>) {
  if (active && payload && payload.length) {
    const formatLable = (name: GoalProgressLabel) => {
      if (name === "Goal") {
        return "設定目標"
      }
      if (name === "已達成進度") {
        return "已實現"
      }
      if (name === "剩餘進度") {
        return "尚餘"
      }
    }
    return (
      <div className="text-paragraph flex items-center space-x-2 bg-transparent mix-blend-difference">
        <span className="text-base">
          {formatLable(payload[0].name as GoalProgressLabel)}
        </span>
        <span className="text-lg font-bold">
          ${payload[0].payload.actualValue}
        </span>
      </div>
    )
  }
}
export default function GoalProgress({
  progress,
}: {
  progress: GoalProgressData[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sectionWidth, setSectionWidth] = useState(220) // container size

  const [goal, data] = progress.reduce<
    [GoalProgressData[], GoalProgressData[]]
  >(
    ([goals, others], item) => {
      if (item.name === "Goal") {
        goals.push(item)
      } else {
        others.push(item)
      }
      return [goals, others]
    },
    [[], []],
  )
  useEffect(() => {
    if (containerRef.current) {
      // Get the container width
      setSectionWidth(containerRef.current.clientWidth)
    }
  }, [])

  const cx = sectionWidth / 2 // set chart at center of container
  const cy = 180
  const iR = 60
  const oR = 100
  const value = data.find((v) => v.name === "已達成進度")?.value ?? 0 //目前進度
  return (
    <section className="section py-2" ref={containerRef}>
      <h2 className="text-xl font-bold">目標達成率</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart >
          <Pie
            data={goal}
            dataKey="value"
            nameKey="name"
            cx={cx}
            cy={cy}
            startAngle={180}
            endAngle={0}
            outerRadius={50}
            fill="var(--chart-3)"
            key="goal"
            stroke="none"
          />
          <Pie
            dataKey="value"
            nameKey="name"
            startAngle={180}
            key="progress"
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, "var(--needle)")}
          <Tooltip
            content={<CustomTooltip />}
            offset={20}
            wrapperClassName="bg-transparent"
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  )
}
