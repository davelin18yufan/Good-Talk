"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { BetweenHorizonalStart } from "lucide-react"
import React, { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "motion/react"
import { CHART_IMAGES as images } from "@/constants"
import { ChartImageProps } from "@/types/chart"
import { DashboardItem } from "@/types/chart"

// TODO: Add specigic chart images
const Toolbox = ({
  tools,
  onTakeItem,
}: {
  tools: DashboardItem[]
  onTakeItem: (item: DashboardItem) => void
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [activeImage, setActiveImage] = useState<ChartImageProps | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [scale, setScale] = useState(0.5)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const requestRef = useRef<number | null>(null)

  // Handle cursor movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    setCursorPosition((prev) => ({
      x: prev.x + (clientX - prev.x) * 0.2,
      y: prev.y + (clientY - prev.y) * 0.2,
    }))
  }, [])
  const getImageData = (chartId: string) =>
    images.find((image) => image.id === chartId) || { src: "", alt: "Default" }

  useEffect(() => {
    /**
     * Updates the cursor position based on the latest mousemove event.
     * This function is debounced using requestAnimationFrame to prevent
     * excessive re-renders.
     * @param {MouseEvent} e The latest mousemove event.
     */
    const updateCursorPosition = (e: MouseEvent) => {
      if (requestRef.current) return
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e)
        requestRef.current = null
      })
    }

    window.addEventListener("mousemove", updateCursorPosition)
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [handleMouseMove])

  const handleToolHover = useCallback(
    (tool: DashboardItem) => {
      if (activeImage?.id !== tool.chartId) {
        // using image.chartId find corresponding image
        // and set it as active
        const activeTool = images.find((i) => i.id === tool.chartId)
        setActiveImage(activeTool || null)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setOpacity(1)
          setScale(1)
        }, 50)
      } else {
        setOpacity(1)
        setScale(1)
      }
    },
    [activeImage],
  )

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
    setScale(0.5)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null)
    }, 300)
  }, [])

  return (
    <div
      className="relative min-h-fit w-full rounded-md"
      onMouseLeave={handleMouseLeave}
    >
      {tools.map((tool) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            onTakeItem(tool)
            handleMouseLeave()
          }}
          key={tool.i}
          className={`relative flex cursor-pointer items-center justify-between rounded-lg border-b border-secondary-light py-2 max-md:flex-col md:py-4 dark:border-secondary-dark`}
          onMouseEnter={() => handleToolHover(tool)}
        >
          {!isDesktop && (
            <img
              src={getImageData(tool.chartId).src}
              className="h-10 w-full rounded-md object-cover sm:h-12"
              alt={getImageData(tool.chartId).alt}
              loading="lazy"
            />
          )}
          <h5
            className={`newFont relative py-2 text-sm font-semibold uppercase leading-[100%] sm:text-base md:text-xl dark:text-gray-300 ${
              activeImage?.id === tool?.chartId
                ? "text-btn z-20 mix-blend-difference"
                : "text-gray-700"
            }`}
          >
            {tool.chartId}
          </h5>
          <button
            className={`hidden rounded-full p-2 transition-all duration-300 ease-out md:block md:p-3 ${
              activeImage?.id === tool?.chartId
                ? "bg-button z-20 text-black mix-blend-difference"
                : ""
            }`}
          >
            <BetweenHorizonalStart className="h-5 w-5" />
          </button>
          <div
            className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-linear dark:bg-white ${
              activeImage?.id === tool?.chartId ? "w-full" : "w-0"
            }`}
          />
        </motion.div>
      ))}
      {isDesktop && activeImage && (
        <img
          src={activeImage?.src}
          alt={activeImage.alt}
          className={`pointer-events-none fixed z-10 aspect-video h-32 rounded-lg bg-white object-cover xl:h-40 dark:bg-gray-950`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
  )
}

export default Toolbox
