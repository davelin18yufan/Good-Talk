"use client"

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"
import { ProfitChartData } from "@/types/chart"

export default function ProfitChart({ data }: { data: ProfitChartData[] }) {
  return (
    <section className={cn("section")}>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="var(--grid)" />
          <XAxis dataKey="month" stroke="var(--x-axis)" />
          <YAxis
            label={{ value: "％", position: "insideBottom" }}
            stroke="var(--y-axis)"
          />
          <Tooltip contentStyle={{ backgroundColor: "var(--tooltip)" }} />
          <Legend />
          {/* 大盤 */}
          <Area
            type="monotone"
            dataKey="TWSE"
            fill="var(--area)"
            stroke="var(--area)"
          />
          {/* relative */}
          <Bar dataKey="相對表現" barSize={20} fill="var(--bar)" />
          {/* performance */}
          <Line type="natural" dataKey="Me" stroke="var(--line)" />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}
