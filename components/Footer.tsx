import { MY_GITHUB } from "@/constants/metadata"
import Link from "next/link"
import ButtonLink from "./buttons/ButtonLink"
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer
      className={cn("bg-tertiary relative mt-14")}
    >
      <div className="bg-transparent py-10">
        <figure className="absolute inset-0 -top-14 size-full h-full bg-logo bg-cover bg-center bg-no-repeat opacity-20 mix-blend-multiply pointer-events-none" />
        <nav className="flex-center gap-4 md:gap-8">
          {NAV_LINKS.map((link) => (
            <ButtonLink key={link.tabName}>
              <Link href={link.route}>{link.tabName}</Link>
            </ButtonLink>
          ))}
        </nav>
        <nav>
          <div className="flex-center gap-2.5 p-4 md:gap-4">
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.title} href={link.href} className="capitalize">
                <Image
                  width={24}
                  height={24}
                  src={link.icon}
                  alt={link.title}
                  className="dark:invert"
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <aside className="bg-input w-full py-4">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <ButtonLink>
            <Link href={MY_GITHUB} className="text-subtext">
              Dave Lin
            </Link>
          </ButtonLink>
          .
        </p>
      </aside>
    </footer>
  )
}
