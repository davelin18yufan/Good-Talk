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
    <div className={cn("section")}>
      <ResponsiveContainer width="100%" height={360}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "％", position: "insideBottom" }} />
          <Tooltip />
          <Legend />
          {/* 大盤 */}
          <Area
            type="monotone"
            dataKey="TWSE"
            fill="#8884d8"
            stroke="#8884d8"
          />
          {/* relative */}
          <Bar dataKey="相對表現" barSize={20} fill="#413ea0" />
          {/* performance */}
          <Line type="natural" dataKey="Me" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
