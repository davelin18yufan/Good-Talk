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
import { CompactType, DashboardItem, ResponsiveLayouts } from "@/types/chart"
import Toolbox from "@/components/dashboard/Toolbox"
import { userLayouts, chartProps } from "@/api"

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const defaultProps = {
  rowHeight: 30,
  onLayoutChange: (allLayouts: ResponsiveLayouts) => {},
  cols: { lg: 13, md: 10, sm: 6, xs: 4, xxs: 2 },
  breakpoints: { lg: 1024, md: 768, sm: 640, xs: 480, xxs: 0 }, // based on parent container size.
}
// * Layout => A single layoutItem config.
// * Layouts => { [breakpoints]: Layout[] }

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
    setToolbox((prev) => ({
      ...prev,
      [breakpoint]: [...userLayouts.toolbox[breakpoint]],
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
