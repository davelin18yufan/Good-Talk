import { ButtonHTMLAttributes } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface ButtonEffectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  emphasis?: number
}


/**
 * Border-bottom effect.
 * @returns
 */
export function BottomGradient() {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

export default function ButtonEffect({
  children,
  className,
  emphasis = 20,
  ...props
}: ButtonEffectProps) {
  return (
    <Button
      className={cn(
        "after:button-in before:ease-button-in",
        "!bg-secondary text-invert",
        "before:bg-button after:!bg-button",
        "group/btn relative z-[1] min-w-full overflow-hidden shadow-lg",
        "before:absolute before:left-0 before:top-0 before:h-1/2 before:w-0 before:transition-all before:duration-300 before:content-['']",
        "after:absolute after:bottom-0 after:right-0 after:h-1/2 after:w-0 after:transition-all after:duration-300 after:content-['']",
        "hover:before:left-auto hover:before:right-0 hover:before:w-full hover:after:left-0 hover:after:right-auto hover:after:w-full",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "relative z-[1] block text-white group-hover/btn:text-neutral-900",
          "origin-left transform text-left text-base uppercase",
          "transition-colors duration-300 ease-in-out",
        )}
      >
        {children}
      </span>
      {emphasis > 0 && (
        <em
          style={{right: `${emphasis}px`}}
          className={cn(
            "group-hover/btn:scale-x-75 group-hover/btn:!bg-neutral-800",
            "absolute top-1/2 z-[1] h-px w-[47%]",
            "origin-right scale-x-[0.25] transform transition-all duration-300 ease-in-out",
            "bg-neutral-200",
          )}
        ></em>
      )}
    </Button>
  )
}
