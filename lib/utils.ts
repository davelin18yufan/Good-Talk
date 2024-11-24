import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as a string with a maximum of 2 decimal places.
 *
 * @param {number} amount The number to be formatted.
 * @returns {string} The formatted string, e.g. 652.34
 */
export function formatNumber(amount: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Creates a debounced function that delays invoking the provided function
 *
 * @param {function} callback The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @returns {function} The debounced function.
 */
export function debounce(callback: (...args: any) => void, delay: number) {
  let timeoutId: NodeJS.Timeout
  return (...args: any) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
