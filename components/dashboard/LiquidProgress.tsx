"use client"
import React, { useState, useEffect } from "react"
import NumberTicker from "../NumberTicker"
import { cn } from "@/lib/utils"

/**
 * Returns a hex color code based on the input value.
 * The color transitions from green to orange to red as the value increases.
 *
 * @param value - A numeric value used to determine the color.
 * @returns A string representing the hex color code corresponding to the value.
 *
 * - Green shades for values between 0 and 100.
 * - Orange shades for values between 101 and 175.
 * - Red shades for values between 176 and 225.
 * - A deep red for values above 225.
 */
const getBgColorByValue = (value: number): string => {
  if (value <= 25) return "#20c997" // Green-500
  if (value <= 50) return "#0f9d58" // Green-600
  if (value <= 75) return "#048e67" // Green-700
  if (value <= 100) return "#0e7554" // Green-800
  if (value <= 125) return "#e46408" // Orange-500
  if (value <= 150) return "#d95c0e" // Orange-600
  if (value <= 175) return "#a9560d" // Orange-700
  if (value <= 200) return "#ec5757" // Red-500
  if (value <= 225) return "#dc2626" // Red-600
  return "#991b1b" // Red-700
}

const LiquidProgress = ({
  percent,
  className,
}: {
  percent: number
  className?: string
}) => {
  const [color, setColor] = useState("#10b981") // Default to Green-500

  // Update the color based on the percentage
  const updateColor = (value: number) => {
    const newColor = getBgColorByValue(value)
    setColor(newColor)
  }

  useEffect(() => {
    updateColor(percent)
  }, [percent])

  // Define the water top position based on the percentage
  const waterLevel = 100 - percent / 2.5

  return (
    <div
      className={cn(
        "bg-primary flex flex-col items-center justify-center",
        className,
      )}
    >
      <div
        className="relative rounded-full border-8 shadow-2xl"
        style={{
          borderColor: color,
          boxShadow: `0 0 10px ${color}33`,
        }}
      >
        <div className="relative aspect-square size-24 overflow-hidden rounded-full border-4 border-slate-500 md:size-28 lg:size-32">
          {/* Percentage */}
          <p
            className={cn(
              "flex-center absolute inset-0 whitespace-pre-wrap text-xl font-medium tracking-tighter md:text-2xl lg:text-3xl",
              "bg-gradient-to-r bg-clip-text text-transparent",
            )}
            style={{
              backgroundImage: `linear-gradient(to right, ${color}, ${color})`,
            }}
          >
            <NumberTicker
              value={percent}
              className={cn("bg-inherit text-inherit dark:text-inherit")}
              decimalPlaces={1}
            />
            <span className="font-mono">%</span>
          </p>
          {/* Wave animation */}
          <div
            className={`absolute -left-1/2 h-[200%] w-[200%] animate-progress-wave rounded-[40%] opacity-40`}
            style={{
              top: `${waterLevel}%`,
              backgroundColor: color,
              boxShadow: `0 0 15px ${color}66`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LiquidProgress
