"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring } from "motion/react"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left rounded-lg bg-gradient-to-r from-[#bb9a88] via-[#f7a817] to-[#ea6146] dark:from-[#cac6bd] dark:via-[#a9c9a4] dark:to-[#8bb6c9]",
        className,
      )}
      style={{
        scaleX,
      }}
    />
  )
}
