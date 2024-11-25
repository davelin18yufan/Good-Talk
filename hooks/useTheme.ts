import { useState, useEffect, useCallback } from "react"

export const THEME_KEY = "theme"
export const SYSTEM_THEME = "system"
export const DARK_THEME = "dark"
export const LIGHT_THEME = "light"

export type Theme = typeof SYSTEM_THEME | typeof DARK_THEME | typeof LIGHT_THEME

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
