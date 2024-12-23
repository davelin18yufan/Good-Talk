import { UseInViewOptions, Variants } from "motion/react"
import { ButtonHTMLAttributes } from "react"

export type MarginType = UseInViewOptions["margin"]

export interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

export type FadeTextProps = {
  className?: string
  direction?: "up" | "down" | "left" | "right"
  framerProps?: Variants
  text: string
}

export interface FilterItem {
  name: string
  value: string
}

export interface FilterGroup {
  groupName: string
  items: FilterItem[]
}

export interface FilterProps {
  filters: FilterGroup[]
  otherClasses?: string
  containerClasses?: string
}

export type Tab = {
  title: string
  value: string
  content?: string | React.ReactNode
}

export type Theme = typeof SYSTEM_THEME | typeof DARK_THEME | typeof LIGHT_THEME

export interface ThemeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  children: React.ReactNode
  active: boolean
}

export interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  delayTransition?: number
}

export interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export interface ButtonLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export type TColorProp = `#${string}` | `#${string}`[]
export interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: TColorProp | string
  className?: string
  children: React.ReactNode
}

export interface AnimatedSubscribeButtonProps {
  buttonColor: string
  buttonTextColor?: string
  subscribeStatus: boolean
  initialText: React.ReactElement<any> | string
  changeText: React.ReactElement<any> | string
}
