"use client"

import { useState, useEffect, useCallback, useRef, Component } from "react"
import {
  Responsive,
  WidthProvider,
  Layout,
  ResponsiveProps,
  WidthProviderProps,
} from "react-grid-layout"
import "@/styles/RGL.css"
import { cn } from "@/lib/utils"
import { DEFAULT_TOOLBOX, DEFAULT_LAYOUTS, DEFAULT_COMPACTTYPE } from "@/constants"
import { Delete,  History,  Pin, PinOff } from "lucide-react"
import ButtonEffect from "@/components/buttons/ButtonEffect"
import { motion } from "motion/react"
import { renderChart } from "./helpers"
import { DynamicChartProps, ChartID, ChartProps, CompactType } from "@/types/chart"
import Toolbox from "@/components/dashboard/Toolbox"

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const defaultProps = {
  rowHeight: 30,
  onLayoutChange: (allLayouts: ResponsiveLayouts) => {},
  cols: { lg: 13, md: 10, sm: 6, xs: 4, xxs: 2 },
  breakpoints: { lg: 1024, md: 768, sm: 640, xs: 480, xxs: 0 }, // based on parent container size.
}

// * Layout => A single layoutItem config.
// * Layouts => { [breakpoints]: Layout[] }
export interface DashboardItem extends Layout {
  static: boolean
  chartId: ChartID // Identifier for charts
  chartProps?: ChartProps
  content?: React.ReactNode
}

export interface ResponsiveLayouts {
  [v: string]: DashboardItem[]
}


// TODO:Replace dummy data
const userLayouts: {
  layouts: ResponsiveLayouts
  toolbox: ResponsiveLayouts
  compactType: CompactType
} = {
  layouts: DEFAULT_LAYOUTS,
  toolbox: DEFAULT_TOOLBOX,
  compactType: DEFAULT_COMPACTTYPE,
}
const chartProps: DynamicChartProps = {
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
  TradeSummary: {
    asset: {
      _id: "1",
      totalCost: 1000000,
      totalMarketPrice: 3000000,
      position: [
        { asset_id: "2486", asset_name: "一詮", quantity: 4000, cost: 137 },
        { asset_id: "8103", asset_name: "瀚荃", quantity: 4000, cost: 71 },
        { asset_id: "9958", asset_name: "世紀剛", quantity: 1000, cost: 223 },
        { asset_id: "3037", asset_name: "欣興", quantity: 1000, cost: 160 },
      ],
    },
    currentPrices: [
      { symbol: "2486", name: "一詮", closePrice: 128 },
      { symbol: "8103", name: "瀚荃", closePrice: 55.1 },
      { symbol: "9958", name: "世紀剛", closePrice: 208 },
      { symbol: "3037", name: "欣興", closePrice: 161.5 },
    ],
  },
  TradePlan: [
    {
      _id: "123456789",
      type: "多單",
      target: {
        symbol: "AAPL",
        name: "Apple Inc.",
      },
      action: "建倉",
      entryPrice: 113,
      targetPrice: 150,
      stop: {
        type: "停損",
        price: 100,
      },
      expectation: 150 / 100,
      isExecuted: false,
    },
    {
      _id: "987654321",
      type: "空單",
      target: {
        symbol: "TSLA",
        name: "Tesla, Inc.",
      },
      action: "建倉",
      entryPrice: 1000,
      targetPrice: 1194,
      stop: {
        type: "停損",
        price: 900,
      },
      expectation: 1194 / 900,
      isExecuted: false,
      comment: "some comment",
    },
    {
      _id: "123456780",
      type: "多單",
      target: {
        symbol: "AAPL",
        name: "Apple Inc.",
      },
      action: "出場",
      entryPrice: 155,
      targetPrice: 180,
      stop: { type: "停利", price: 150 },
      expectation: 180 / 150,
      isExecuted: true,
    },
  ],
}

const initLayoutsState = (
  initialLayouts: ResponsiveLayouts,
  chartProps: Record<string, any>,
): ResponsiveLayouts =>
  Object.fromEntries(
    Object.entries(initialLayouts).map(([breakpoint, layouts]) => [
      breakpoint,
      layouts.map((layout) => ({
        ...layout,
        chartProps: chartProps[layout.i],
      })),
    ]),
  )

// TODO: Fetch userLayouts from database.
function Dashboard() {
  const [compactType, setCompactType] = useState<CompactType>(
    userLayouts.compactType ?? "vertical",
  )
  const [mounted, setMounted] = useState<boolean>(false)
  const [layouts, setLayouts] = useState<ResponsiveLayouts>(
    initLayoutsState(userLayouts.layouts ?? DEFAULT_LAYOUTS, chartProps),
  )
  const [toolbox, setToolbox] = useState<ResponsiveLayouts>(
    initLayoutsState(userLayouts.toolbox ?? DEFAULT_TOOLBOX, chartProps),
  )
  // !This is a heck to get the container width
  const containerRef =
    useRef<Component<ResponsiveProps & WidthProviderProps, any, any>>(null)
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg")

  // componentDidMount equivalent
  useEffect(() => {
    setMounted(true)
    const calculateSize = () => {
      const containerWidth =
        containerRef.current instanceof HTMLElement
          ? containerRef.current.getBoundingClientRect().width
          : window.innerWidth

      if (containerWidth >= 1024) return "lg"
      if (containerWidth >= 768) return "md"
      if (containerWidth >= 640) return "sm"
      if (containerWidth >= 480) return "xs"
      return "xxs"
    }

    setCurrentBreakpoint(calculateSize()) // Set the size on mount
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
          "relative z-[2] cursor-pointer overflow-hidden rounded-lg bg-slate-100 shadow-md dark:bg-slate-800",
        )}
      >
        {/* Render custom charts based on chartId */}
        {renderChart(l.chartId, chartProps)}

        {/* function buttons */}
        {/* //* Button container is higher than icon in DOM tree level, so it will capture container's event first then icon  */}
        <div
          className="text-btn flex-center absolute right-2 top-0.5 rounded-sm"
          onMouseDown={(e) => e.stopPropagation()} // MouseDowni event will triger immediately when pressed, but click is trigered after MouseUp, so stop propogation at here prevent bubbling to the top level drag event.
        >
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
  }, [layouts, toolbox])

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

  // Toggle static behavior
  const onStaticToggle = (item: DashboardItem) => {
    setLayouts((prev) => ({
      ...prev,
      [currentBreakpoint]: prev[currentBreakpoint].map((l) =>
        l.i === item.i ? { ...l, static: !l.static } : l,
      ),
    }))
  }

  /**
   * Callback for when the layout of a chart changes.
   *
   * Updates the layout state by iterating over all breakpoints and
   * updating the layout properties of the changed item.
   *
   * If the layout property of the changed item is different from the
   * current value in the state, or if the chartProps of the changed item
   * has changed, the state is updated.
   *
   * @param changedLayoutItem The changed layout item.
   * @param allLayouts The layout state for all breakpoints.
   */
  const onLayoutChange = (
    changedLayoutItem: DashboardItem[],
    allLayouts: ResponsiveLayouts,
  ) => {
    defaultProps.onLayoutChange?.(allLayouts)
    // console.log("changedLayoutItem", changedLayoutItem)
    // console.log("allLayouts", allLayouts)

    setLayouts((prev) => {
      const updatedLayouts = { ...prev }
      let hasChanges = false

      // Iterate over all breakpoints
      Object.keys(updatedLayouts).forEach((breakpoint) => {
        const currentLayouts = updatedLayouts[breakpoint]

        const updatedBreakpointLayouts = currentLayouts.map((l) => {
          // If the current breakpoint is the one that changed, update its layout properties
          if (breakpoint === currentBreakpoint) {
            const newLayout = changedLayoutItem.find((item) => item.i === l.i)
            if (!newLayout) return l

            const needsUpdate =
              newLayout.x !== l.x ||
              newLayout.y !== l.y ||
              newLayout.w !== l.w ||
              newLayout.h !== l.h ||
              chartProps[l.chartId] !== l.chartProps

            if (needsUpdate) {
              hasChanges = true
              return {
                ...newLayout,
                chartId: l.chartId,
                chartProps: chartProps[l.chartId],
              }
            }
            return l
          } else {
            // For other breakpoints, only update chartProps if necessary
            if (chartProps[l.chartId] !== l.chartProps) {
              hasChanges = true
              return {
                ...l,
                chartId: l.chartId,
                chartProps: chartProps[l.chartId],
              }
            }
            return l
          }
        })

        // Only update the breakpoint layout if there's an actual change
        if (currentLayouts !== updatedBreakpointLayouts) {
          // @ts-ignore
          updatedLayouts[breakpoint] = updatedBreakpointLayouts
        }
      })
      // console.log("layouts", layouts)
      return hasChanges ? updatedLayouts : prev
    })
  }

  /**
   * Updates the current breakpoint and sets the layout for the specified breakpoint.
   *
   * @param breakpoint - The breakpoint that is currently active, affecting the layout.
   */
  const onBreakpointChange = (breakpoint: string) => {
    setCurrentBreakpoint(breakpoint)
    setLayouts((prev) => ({
      ...prev,
      [breakpoint]: [...userLayouts.layouts[breakpoint]],
    }))
  }

  // Remove from layout and add it to the toolbox.
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

  // Remove from the toolbox and add it to layouts.
  const onTakeItem = (item: DashboardItem) => {
    console.log("take", item)
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

  // Reset layouts
  const onResetLayout = useCallback((type: "user" | "default") => {
    setCompactType(type === "user" ? userLayouts.compactType : DEFAULT_COMPACTTYPE)
    setLayouts(type === "user" ? userLayouts.layouts : DEFAULT_LAYOUTS)
    setToolbox(type === "user" ? userLayouts.toolbox : DEFAULT_TOOLBOX)
  }, [userLayouts])

  return (
    <main className="flex">
      <aside className="flex flex-col gap-2.5 px-1">
        {/* //TODO: Store user preference */}
        <ButtonEffect emphasis={0}>儲存設定</ButtonEffect>

        <div className="flex gap-1 overflow-hidden">
          <ButtonEffect
            emphasis={0}
            onClick={() => onResetLayout("user")}
            className="min-w-[65%]"
          >
            <History width={20} height={20}/>
          </ButtonEffect>
          <ButtonEffect
            emphasis={0}
            onClick={() => onResetLayout("default")}
            className="min-w-[31%]"
          >
            <span className="md:text-sm text-xs overflow-hidden">Reset</span>
          </ButtonEffect>
        </div>

        {/* Compact type */}
        <div className="flex items-center justify-between last:inline-block">
          <span className="max-md:hidden">自動排序方向 : </span>
          <span className="bg-button text-invert ml-1 rounded-sm px-1.5 capitalize">
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
          <span className="max-md:hidden">現在畫面尺寸 : </span>
          <span className="bg-button text-invert ml-1 rounded-sm px-1.5 capitalize">
            {currentBreakpoint || "None"}
          </span>
        </div>

        {/* Toolbox */}
        <article className="flex flex-col items-center justify-start gap-2 will-change-contents">
          <Toolbox tools={toolbox[currentBreakpoint]} onTakeItem={onTakeItem} />
        </article>
      </aside>

      {/* Grid Layout */}
      <ResponsiveReactGridLayout
        {...defaultProps}
        className="relative flex-1 transition-all duration-300 ease-out"
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
        ref={containerRef}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </main>
  )
}

export default Dashboard
