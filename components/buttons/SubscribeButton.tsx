"use client"

import { AnimatedSubscribeButtonProps } from "@/types/shared"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

/**
 * A subscribe button that can be used to show a changing text when the button is clicked.
 * The button will change its text from the initialText to the changeText when clicked.
 * The button will have a fade-in and fade-out animation when the state changes.
 *
 * @param {string} buttonColor The color of the button.
 * @param {boolean} subscribeStatus The initial status of the button, true if subscribed, false if not.
 * @param {string} buttonTextColor The color of the text of the button.
 * @param {string} changeText The text of the button when it is clicked.
 * @param {string} initialText The initial text of the button.
 */
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
          className="relative flex items-center justify-center overflow-hidden rounded-md border-none p-[8px] max-lg:w-[200px]"
          onClick={() => setIsSubscribed(false)}
          onMouseDown={(e) => e.stopPropagation()} // prevent img drag event
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
          className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-md border-none p-[8px] max-lg:w-[200px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          onMouseDown={(e) => e.stopPropagation()} // prevent img drag event
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span
            key="reaction"
            className="relative block h-full w-full font-semibold"
          >
            {initialText}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
