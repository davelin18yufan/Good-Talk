import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import { FloatingDockMobile } from "./FloatingDock"
import { ThemeToggleButton } from "../Theme"
import { ROUTES } from "@/constants/routes"
import { User } from "lucide-react"

export default function MobileNavbar() {
  const items = NAV_LINKS.map((link) => ({
    title: link.tabName,
    href: link.route,
    icon: <Image src={link.icon} width={20} height={2} alt={link.tabName} />,
  })).concat([
    {
      title: "Mode",
      href: "#",
      icon: <ThemeToggleButton iconSize={20} />,
    },
  ])

  return (
    <nav className="relative h-52 md:hidden">
      <div
        className="flex-center absolute right-2 top-1/2 z-30 h-12 w-12 -translate-y-6"
      >
        <FloatingDockMobile items={items} className="" />
      </div>
    </nav>
  )
}
