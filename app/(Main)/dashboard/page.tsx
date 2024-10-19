"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Responsive, WidthProvider, Layout } from "react-grid-layout"
import "@/styles/RGL.css"
import { cn } from "@/lib/utils"
import { DEFAULT_TOOLBOX, DEFAULT_LAYOUTS } from "@/constants"
import { Delete, Pin, PinOff } from "lucide-react"
import ButtonEffect from "@/components/buttons/ButtonEffect"
import { motion } from "framer-motion"

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const defaultProps = {
  rowHeight: 30,
  onLayoutChange: (allLayouts: ResponsiveLayouts) => {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  breakpoints: { lg: 1024, md: 768, sm: 640, xs: 480, xxs: 0 }, // based on parent container size.
}

// * Layout => A single layoutItem config.
// * Layouts => { [breakpoints]: Layout[] }
interface DashboardItem extends Layout {
  static: boolean
  chartId: string // Identifier for charts
  chartProps?: any
  content?: React.ReactNode
}

interface ResponsiveLayouts {
  [v: string]: DashboardItem[]
}

type CompactType = "horizontal" | "vertical" | null

// *Replace dummy data
const userLayouts: { layouts: ResponsiveLayouts; toolbox: ResponsiveLayouts } =
  {
    layouts: DEFAULT_LAYOUTS,
    toolbox: DEFAULT_TOOLBOX,
  }
const chartProps: Record<string, any> = {
  ProfitChart: [
    { month: "Jan", TWSE: 23, Me: 8, 相對表現: ((8 / 23) * 100).toFixed(1) },
    { month: "Feb", TWSE: 27, Me: 10, 相對表現: ((10 / 27) * 100).toFixed(1) },
    { month: "Mar", TWSE: 32, Me: 18, 相對表現: ((18 / 32) * 100).toFixed(1) },
    { month: "Apr", TWSE: 35, Me: 20, 相對表現: ((20 / 35) * 100).toFixed(1) },
    { month: "May", TWSE: 30, Me: 22, 相對表現: ((22 / 30) * 100).toFixed(1) },
    { month: "Jun", TWSE: 28, Me: 24, 相對表現: ((24 / 28) * 100).toFixed(1) },
  ],
  RealizedPnlChart: [
    { week: "June/1", 成交筆數: 118, 報酬率: 3, 獲利筆數: 78 },
    { week: "June/2", 成交筆數: 11, 報酬率: 16.2, 獲利筆數: 4 },
    { week: "June/3", 成交筆數: 10, 報酬率: -2, 獲利筆數: 1 },
    { week: "June/4", 成交筆數: 20, 報酬率: 0.21, 獲利筆數: 10 },
  ],
  FundPieChart: [],
  TradeFundBase: [
    { name: "現金水位", value: 200000 },
    { name: "持倉部位", value: 800000 },
  ],
  TradeLog: [
    {
      _id: "1",
      type: "多單",
      action: "現股買進",
      target: { symbol: "AAPL", name: "Apple. Inc" },
      date: "12:09",
      price: 150.25,
      quantity: 1000,
      comment: "在開盤時買入",
    },
    {
      _id: "2",
      type: "多單",
      action: "現股賣出",
      target: { symbol: "AAPL", name: "Apple. Inc" },
      date: "09:10",
      price: 155.75,
      quantity: 100,
      comment: "在高點賣出",
    },
    {
      _id: "3",
      type: "多單",
      action: "融資買進",
      target: { symbol: "GOOGL", name: "Google. corp" },
      date: "11:20",
      price: 2700.5,
      quantity: 50,
      comment: "使用保證金進行買進",
    },
    {
      _id: "4",
      type: "多單",
      action: "融資賣出",
      target: { symbol: "GOOGL", name: "Google. corp" },
      date: "12:32",
      price: 2725.0,
      quantity: 50,
      comment: "持有一天後賣出",
    },
    {
      _id: "5",
      type: "空單",
      action: "沖買",
      target: { symbol: "TSLA", name: "Tsela. Inc" },
      date: "09:55",
      price: 900.0,
      quantity: 20,
    },
    {
      _id: "6",
      type: "空單",
      action: "沖賣",
      target: { symbol: "TSLA", name: "Tsela. Inc" },
      date: "09:50",
      price: 910.0,
      quantity: 20,
    },
  ],
  TradeSummary: { asset: [], currentPrices: [] },
}

// TODO: Fetch userLayouts from database.
function Dashboard() {
  const [compactType, setCompactType] = useState<CompactType>("vertical")
  const [mounted, setMounted] = useState<boolean>(false)
  const [layouts, setLayouts] = useState<ResponsiveLayouts>(
    userLayouts.layouts ?? DEFAULT_LAYOUTS,
  )
  const [toolbox, setToolbox] = useState<ResponsiveLayouts>(
    userLayouts.toolbox ?? DEFAULT_TOOLBOX,
  )
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg")

  // componentDidMount equivalent
  useEffect(() => {
    setMounted(true)
  }, [mounted])

  // Generate DOM elements for the grid.
  // !Cant extract item out cause key have to be set to equals to layout.i
  const generateDOM = useCallback(() => {
    return layouts[currentBreakpoint].map((l: DashboardItem, i: number) => (
      <motion.div
        key={l.i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          l.static && "static",
          "relative z-[2] cursor-pointer rounded-lg bg-slate-100 dark:bg-slate-800",
        )}
      >
        <span className="text">
          {l.static && "Static"}
          {l.chartId}
        </span>
        {/* Render custom charts based on chartId */}
        {/* {renderCustomChart(l.chartId)} */}

        {/* function button */}
        <div className="text-btn flex-center absolute right-2 top-0.5 rounded-sm">
          {l.static ? (
            <Pin
              width={30}
              height={30}
              className="p-1.5"
              onClick={(e) => {
                e.stopPropagation()
                onStaticToggle(l)
              }}
            />
          ) : (
            <PinOff
              width={30}
              height={30}
              className="p-1.5"
              onClick={(e) => {
                e.stopPropagation()
                onStaticToggle(l)
              }}
            />
          )}
          <Delete
            className="p-1.5"
            onClick={(e) => {
              e.stopPropagation()
              onRemoveItem(l)
            }}
            width={30}
            height={30}
          />
        </div>
      </motion.div>
    ))
  }, [layouts])

  // ?using dynamic import
  //  const renderCustomChart = (chartId: string) => {
  //    const props = chartProps[chartId]

  //    switch (chartId) {
  //      case "ProfitChart":
  //        return <ProfitChart data={props} />
  //      case "FundPieChart":
  //        return <FundPieChart data={props} />
  //      case "RealizedPnlChart":
  //        return <RealizedPnlChart data={props} />
  //      case "TradeFundBase":
  //        return <TradeFundBase data={props} />
  //      case "TradeLog":
  //        return <TradeLog data={props} />
  //      case "TradeSummary":
  //        return <TradeSummary data={props} />
  //      default:
  //        return <div>No chart found</div>
  //    }
  //  }

  // Toggle compaction type
  const onCompactTypeChange = () => {
    setCompactType((oldCompactType) =>
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal",
    )
  }

  const onStaticToggle = (item: DashboardItem) => {
    setLayouts((prev) => ({
      ...prev,
      [currentBreakpoint]: prev[currentBreakpoint].map((l) =>
        l.i === item.i ? { ...l, static: !l.static } : l,
      ),
    }))
  }

  // Handle layout change
  const onLayoutChange = (
    layout: DashboardItem[],
    allLayouts: ResponsiveLayouts,
  ) => {
    defaultProps.onLayoutChange?.(allLayouts)
    // everytime layout change insert data into chart
    setLayouts((prev) => {
      const updatedLayouts = { ...prev }
      Object.keys(updatedLayouts).forEach((breakpoint) => {
        updatedLayouts[breakpoint] = updatedLayouts[breakpoint].map((l) => ({
          ...l,
          chartProps: chartProps[l.i],
        }))
      })
      
      return updatedLayouts
    })
  }

  const onBreakpointChange = (breakpoint: string) => {
    setCurrentBreakpoint(breakpoint)
  }

  // Remove from layout and add it to the toolbox
  const onRemoveItem = (item: DashboardItem) => {
    setLayouts((prev) => {
      const updatedLayouts = { ...prev }

      // Remove the item from all breakpoints
      Object.keys(updatedLayouts).forEach((breakpoint) => {
        updatedLayouts[breakpoint] = updatedLayouts[breakpoint].filter(
          ({ i }) => i !== item.i,
        )
      })

      return updatedLayouts
    })

    // Add the removed item to the toolbox for all breakpoints
    setToolbox((prev) => {
      const updatedToolbox = { ...prev }

      Object.keys(updatedToolbox).forEach((breakpoint) => {
        updatedToolbox[breakpoint] = [...updatedToolbox[breakpoint], item]
      })

      return updatedToolbox
    })
  }

  // Remove the item from the toolbox and add it to the layouts
  const onTakeItem = (item: DashboardItem) => {
    // Remove the item from the toolbox across all breakpoints
    setToolbox((prev) => {
      const updatedToolbox = { ...prev }

      Object.keys(updatedToolbox).forEach((breakpoint) => {
        updatedToolbox[breakpoint] = updatedToolbox[breakpoint].filter(
          (tbItem) => tbItem.i !== item.i,
        )
      })

      return updatedToolbox
    })

    // Add the item back to the layouts across all breakpoints
    setLayouts((prev) => {
      const updatedLayouts = { ...prev }

      Object.keys(updatedLayouts).forEach((breakpoint) => {
        updatedLayouts[breakpoint] = [...updatedLayouts[breakpoint], item]
      })

      return updatedLayouts
    })
  }

  return (
    <main className="flex">
      <aside className="flex flex-col gap-2.5 px-1">
        {/* //TODO: Store user preference */}
        <ButtonEffect emphasis={6}>儲存設定</ButtonEffect>
        {/* Compact type */}
        <div className="flex items-center justify-between last:inline-block">
          <span className="max-sm:hidden">自動排序方向 : </span>
          <span className="bg-button text-placeholder ml-1 rounded-sm px-1.5 capitalize">
            {compactType
              ? compactType.charAt(0).toUpperCase() + compactType.slice(1)
              : "None"}
          </span>
          <span className="cursor-pointer p-2" onClick={onCompactTypeChange}>
            &#8652;
          </span>
        </div>

        {/* Breakpoint */}
        <div className="flex items-center justify-start">
          <span className="max-sm:hidden">現在畫面尺寸 : </span>
          <span className="bg-button text-placeholder ml-1 rounded-sm px-1.5 capitalize">
            {currentBreakpoint || "None"}
          </span>
        </div>

        {/* Toolbox */}
        <article className="flex flex-col items-center justify-start gap-2 will-change-contents">
          {toolbox[currentBreakpoint]?.map((tool: DashboardItem) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-button w-full cursor-pointer"
              onClick={() => onTakeItem(tool)}
              key={tool.i}
            >
              {tool.chartId}
            </motion.div>
          ))}
        </article>
      </aside>

      {/* Grid Layout */}
      <ResponsiveReactGridLayout
        {...defaultProps}
        className="relative flex-1 transition-all duration-300 ease-out"
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        // onDrop={onDrop}
        onBreakpointChange={onBreakpointChange}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </main>
  )
}

export default Dashboard
