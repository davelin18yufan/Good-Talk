"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring } from "motion/react"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        "fixed inset-y-0 left-0 z-[1000] w-4 origin-top bg-gradient-to-b from-[#145110] via-[#f7a817] to-[#ec5234] dark:from-[#cac6bd] dark:via-[#a9c9a4] dark:to-[#8bb6c9]",
        className,
      )}
      style={{
        scaleY,
      }}
    />
  )
}
