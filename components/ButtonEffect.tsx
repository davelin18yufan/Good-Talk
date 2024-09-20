import { ButtonHTMLAttributes } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ButtonEffectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function ButtonEffect({
  children,
  className,
  ...props
}: ButtonEffectProps) {
  return (
    <Button
      className={cn(
        "before:ease-button-in after:button-in",
        "!bg-secondary text-invert",
        "before:bg-button after:!bg-button",
        "group relative z-[1] min-w-full overflow-hidden shadow-lg",
        "before:absolute before:left-0 before:top-0 before:h-1/2 before:w-0 before:transition-all before:duration-300 before:content-['']",
        "after:absolute after:bottom-0 after:right-0 after:h-1/2 after:w-0 after:transition-all after:duration-300 after:content-['']",
        "hover:before:left-auto hover:before:right-0 hover:before:w-full hover:after:left-0 hover:after:right-auto hover:after:w-full",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "relative z-[1] block text-white group-hover:text-neutral-900",
          "origin-left transform text-left text-base uppercase",
          "transition-colors duration-300 ease-in-out",
        )}
      >
        {children}
      </span>
      <em
        className={cn(
          "group-hover:scale-x-75 group-hover:!bg-neutral-800",
          "absolute right-[23px] top-1/2 z-[1] h-px w-[47%]",
          "origin-right scale-x-[0.25] transform transition-all duration-300 ease-in-out",
          "bg-neutral-200",
        )}
      ></em>
    </Button>
  )
}
