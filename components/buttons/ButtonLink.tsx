import { ButtonHTMLAttributes } from "react"

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <button
      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white"
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonLink
