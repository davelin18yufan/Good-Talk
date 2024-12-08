"use client"

import { useState } from "react"
import { NAV_LINKS, THEME_ITEMS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, MenuItem, ProductItem } from "./NavbarMenu"
import { useTheme} from "@/hooks/useTheme"
import { type Theme } from "@/types/shared"

export default function Navbar({ itemClass }: { itemClass?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const { applyTheme} = useTheme()
  const handleThemeClick = (target: Theme) => {
    applyTheme(target)
  }

  return (
    <Menu setActive={setActive}>
      <div className="flex-center gap-2 px-4 py-2 max-md:hidden">
        <MenuItem
          setActive={setActive}
          active={active}
          item="theme"
          trigger={
            <div
              className={cn(
                "flex-center text-header mr-2 origin-top flex-col gap-2 px-2 py-1 opacity-0 transition-all group-hover/header:-translate-y-2 group-hover/header:opacity-100",
                itemClass,
              )}
            >
              <Image
                src="/moon.svg"
                width={20}
                height={20}
                alt="moon icon"
                className="dark:invert"
              />
              Mode
            </div>
          }
        >
          {THEME_ITEMS.map((theme) => (
            <div className="flex flex-wrap items-center gap-2.5" key={theme.mode}>
              <ProductItem title={theme.mode} src={theme.icon} onClick={() => handleThemeClick(theme.mode)}/>
            </div>
          ))}
        </MenuItem>

        {NAV_LINKS.map((item, index) => (
          <Link
            href={item.route}
            key={item.tabName}
            className={cn(
              "flex-center text-header origin-top flex-col gap-2 px-2 py-1 opacity-0 transition-all hover:rotate-6 hover:!delay-0 group-hover/header:-translate-y-2 group-hover/header:opacity-100",
              itemClass,
            )}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt={item.tabName}
              className="dark:invert"
            />
            {item.tabName}
          </Link>
        ))}
      </div>
    </Menu>
  )
}
