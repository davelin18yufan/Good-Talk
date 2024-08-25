"use client"

import React, { useState, useEffect, useCallback } from "react"

const THEME_KEY = "theme"
const SYSTEM_THEME = "system"
const DARK_THEME = "dark"
const LIGHT_THEME = "light"

type Theme = typeof SYSTEM_THEME | typeof DARK_THEME | typeof LIGHT_THEME

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(SYSTEM_THEME)

  // On page load or when changing themes, best to add inline in head to avoid FOUC
  const applyTheme = useCallback((newTheme: Theme) => {
    const isDark =
      newTheme === DARK_THEME ||
      (newTheme === SYSTEM_THEME &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    document.documentElement.classList.toggle("dark", isDark)

    if (newTheme === SYSTEM_THEME) {
      localStorage.removeItem(THEME_KEY)
    } else {
      localStorage.setItem(THEME_KEY, newTheme)
    }

    setTheme(newTheme)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null
    applyTheme(savedTheme || SYSTEM_THEME)

    // Listen to user system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = () => {
      if (theme === SYSTEM_THEME) {
        applyTheme(SYSTEM_THEME)
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
  }, [applyTheme, theme])

  return { theme, applyTheme }
}

interface ThemeButtonProps {
  theme: Theme
  currentTheme: Theme
  onClick: (theme: Theme) => void
  children: React.ReactNode
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  theme,
  currentTheme,
  onClick,
  children,
}) => (
  <button
    onClick={() => onClick(theme)}
    className={`transition-color m-auto flex w-fit items-center justify-center rounded-lg px-4 py-3 text-lg font-semibold duration-200 ease-in-out ${
      currentTheme === theme
        ? "bg-cyan-800 text-gray-50 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-cyan-300 active:bg-cyan-700"
        : "bg-slate-500 text-gray-50 hover:bg-cyan-800 dark:bg-slate-600 dark:text-gray-400"
    }`}
  >
    {children}
  </button>
)

function ThemeSwitcher() {
  const { theme, applyTheme } = useTheme()

  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center">
        <ThemeButton
          theme={LIGHT_THEME}
          currentTheme={theme}
          onClick={applyTheme}
        >
          Light Theme
        </ThemeButton>
        <ThemeButton
          theme={DARK_THEME}
          currentTheme={theme}
          onClick={applyTheme}
        >
          Dark Theme
        </ThemeButton>
        <ThemeButton
          theme={SYSTEM_THEME}
          currentTheme={theme}
          onClick={applyTheme}
        >
          System Theme
        </ThemeButton>
      </div>
    </main>
  )
}

export default ThemeSwitcher
