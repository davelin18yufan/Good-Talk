"use client"

import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"

interface AnimatedSubscribeButtonProps {
  buttonColor: string
  buttonTextColor?: string
  subscribeStatus: boolean
  initialText: React.ReactElement | string
  changeText: React.ReactElement | string
}

export default function SubscribeButton({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}: AnimatedSubscribeButtonProps) {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus)

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex items-center justify-center overflow-hidden rounded-md p-[10px] max-lg:w-[200px]"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span
            key="action"
            className="relative block h-full w-full font-semibold"
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          >
            {changeText}
          </span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex cursor-pointer items-center justify-center rounded-md border-none p-[10px] max-lg:w-[200px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span key="reaction" className="relative block font-semibold">
            {initialText}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}