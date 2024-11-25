"use client"
import { cn } from "@/lib/utils"
import { IconExclamationCircle } from "@tabler/icons-react"
import { useState } from "react"

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  delayTransition?: number
}

function Tooltip({
  children,
  content,
  side = "top",
  delayTransition = 0,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }

  const handleMouseEnter = () => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delayTransition)
    return () => clearTimeout(timer)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <div
          className={`bg-general text-invert absolute z-50 w-fit rounded px-2.5 py-2 text-sm shadow-lg transition-opacity duration-200 ${positions[side]} ${isVisible ? "opacity-100" : "opacity-0"} `}
        >
          {content}
          {/* Arrow */}
          <div
            className={cn(
              "bg-general absolute h-2 w-2 rotate-45 transform",
              `${side === "top" ? "bottom-[-4px] left-1/2 -translate-x-1/2" : ""}`,
              `${side === "bottom" ? "left-1/2 top-[-4px] -translate-x-1/2" : ""}`,
              `${side === "left" ? "right-[-4px] top-1/2 -translate-y-1/2" : ""}`,
              `${side === "right" ? "left-[-4px] top-1/2 -translate-y-1/2" : ""}`,
            )}
          />
        </div>
      )}
      {children}
    </div>
  )
}

export default Tooltip
