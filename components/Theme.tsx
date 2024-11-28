"use client"

import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME, THEME_ITEMS } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React, {
  useState,
  useEffect,
} from "react"
import { Theme, ThemeButtonProps } from "@/types/shared"
import { useTheme } from "@/hooks/useTheme"


export const ThemeButton = ({ onClick, children, active }: ThemeButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "px-1.5 py-0.5",
      "grid cursor-pointer place-content-center",
      "active:bg-secondary hover:bg-tertiary",
      active ? "bg-tertiary" : "bg-transparent",
    )}
  >
    {children}
  </button>
)

export function ThemeSwitcher() {
  const { theme, applyTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        "flex divide-x",
        "divide-secondary-light dark:divide-secondary-dark",
        "rounded-md border border-secondary-light dark:border-secondary-dark",
        "overflow-hidden",
        "shadow-sm",
      )}
    >
      <div className="flex items-center">
        {THEME_ITEMS.map((item) => (
          <ThemeButton
            onClick={() => applyTheme(item.mode as Theme)}
            active={theme === item.mode}
          >
            <Image
              src={item.icon}
              width={28}
              height={28}
              alt={`${item.mode} icon`}
              className="object-contain p-0.5 dark:invert"
            />
          </ThemeButton>
        ))}
      </div>
    </div>
  )
}

export function ThemeToggleButton ({iconSize}:{iconSize:number}){
  const { theme: currentTheme, applyTheme } = useTheme()

  const handleToggleTheme = () => {
    // System preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
    const effectiveTheme =
      currentTheme === SYSTEM_THEME
        ? prefersDark
          ? DARK_THEME
          : LIGHT_THEME
        : currentTheme
  
    switch (effectiveTheme) {
      case LIGHT_THEME:
        applyTheme(DARK_THEME)
        break
      case DARK_THEME:
        applyTheme(LIGHT_THEME)
        break
      default:
        applyTheme(DARK_THEME)
        break
    }
  }
  const isDark =
    currentTheme === DARK_THEME ||
    (currentTheme === SYSTEM_THEME &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <button onClick={handleToggleTheme} className="rounded-full p-2">
      {isDark ? (
        <Image
          src="/moon.svg"
          width={iconSize}
          height={iconSize}
          alt="moon icon"
          className="object-contain "
        />
      ) : (
        <Image
          src="/sun.svg"
          width={iconSize}
          height={iconSize}
          alt="sun icon"
          className="object-contain dark:invert"
        />
      )}
    </button>
  )
}

