"use client"

import React, { useState, useEffect, useCallback, Suspense } from "react"
import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout"
import "@/styles/RGL.css"
import { cn } from "@/lib/utils"
import { DEFAULT_LAYOUTS } from "@/constants"
import { Delete, Pin, PinOff } from "lucide-react"
import ButtonEffect from "@/components/buttons/ButtonEffect"

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const defaultProps = {
  rowHeight: 30,
  onLayoutChange: () => {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  breakpoints: { lg: 1024, md: 768, sm: 640, xs: 480, xxs: 0 }, // based on parent container size.
}

interface LayoutItem extends Layout {
  static?: boolean
  content?: React.ReactNode
}

type CompactType = "horizontal" | "vertical" | null
// *TODO: Make all layout config into one large set. fit in the situation if fetch from database. But total length is the same
// const dummy userLayouts = {layouts: [], toolbox: []}

// * Layout => A single layoutItem config.
// * Layouts => { [breakpoints]: Layout[] }
// TODO: Fetch userLayouts and toolbox from database.
function Dashboard({ userLayouts }: { userLayouts: Layouts }) {
  const [compactType, setCompactType] = useState<CompactType>("vertical")
  const [mounted, setMounted] = useState<boolean>(false)
  const [layouts, setLayouts] = useState<Layouts>(DEFAULT_LAYOUTS)
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [toolbox, setToolbox] = useState<Layouts>({
    xxs: [{ w: 2, h: 2, x: 0, y: 0, i: "6", moved: false, static: false }],
    xs: [{ w: 2, h: 2, x: 0, y: 0, i: "6", moved: false, static: false }],
    sm: [{ w: 2, h: 2, x: 0, y: 0, i: "6", moved: false, static: false }],
    md: [{ w: 2, h: 2, x: 0, y: 0, i: "6", moved: false, static: false }],
    lg: [{ w: 2, h: 2, x: 0, y: 0, i: "6", moved: false, static: false }],
  })
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg")

  // componentDidMount equivalent
  useEffect(() => {
    setMounted(true)
  }, [mounted])

  // Generate DOM elements for the grid (large size)
  // !Cant extract item out cause key have to be set to equals to layout.i
  const generateDOM = useCallback(() => {
    return layouts[currentBreakpoint].map((l: LayoutItem, i: number) => (
      <div
        key={l.i}
        className={cn(
          l.static && "static",
          "relative z-[2] cursor-pointer rounded-lg bg-slate-100  dark:bg-slate-800",
        )}
      >
        <span className="text">
          {l.static && "Static"}
          {l.i}
        </span>
        {/* function button */}
        <div className="text-btn flex-center absolute right-0 top-0 rounded-sm">
          <Delete
            className="p-2"
            onClick={(e) => {
              e.stopPropagation()
              onRemoveItem(l)
            }}
            width={32}
            height={32}
          />
          {l.static ? (
            <Pin
              width={32}
              height={32}
              className="p-2"
              onClick={(e) => {
                e.stopPropagation()
                onStaticToggle(l)
              }}
            />
          ) : (
            <PinOff
              width={32}
              height={32}
              className="p-2"
              onClick={(e) => {
                e.stopPropagation()
                onStaticToggle(l)
              }}
            />
          )}
        </div>
      </div>
    ))
  }, [layouts])

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

  const onMouseDown = () => {
    setIsGrabbing(true)
  }

  const onMouseUp = () => {
    setIsGrabbing(false)
  }

  const onStaticToggle = (item: LayoutItem) => {
    setLayouts((prev) => ({
      ...prev,
      [currentBreakpoint]: prev[currentBreakpoint].map((l) =>
        l.i === item.i ? { ...l, static: !l.static } : l,
      ),
    }))
  }

  // Handle layout change
  const onLayoutChange = (layout: Layout[], layouts: Layouts) => {
    defaultProps.onLayoutChange?.()
    setLayouts(layouts)
  }

  // Handle drop event
  const onDrop = (layout: Layout[], layoutItem: Layout) => {
    setLayouts((prev) => ({
      lg: [
        ...prev.lg,
        {
          ...layoutItem,
          i: prev.lg.length.toString(),
        },
      ],
    }))
    // alert(
    //   `Dropped element props:\n${JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2)}`,
    // )
  }

  const onBreakpointChange = (breakpoint: string) => {
    setCurrentBreakpoint(breakpoint)
  }

  // Remove from layout and add it to the toolbox
  const onRemoveItem = (item: LayoutItem) => {
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
  const onTakeItem = (item: LayoutItem) => {
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
        <ButtonEffect emphasis={6}>
          儲存
        </ButtonEffect>
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
          {toolbox[currentBreakpoint]?.map((tool: LayoutItem) => (
            <div
              className="bg-button w-full cursor-pointer "
              onClick={() => onTakeItem(tool)}
              key={tool.i}
            >
              {tool.i}
            </div>
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
