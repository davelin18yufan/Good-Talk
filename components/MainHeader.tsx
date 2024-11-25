import Image from "next/image"
import logo from "@/public/logo.svg"
import { MAIN_HEADER_INTRO } from "@/constants/metadata"
import Navbar from "./navbar/Navbar"
import Link from "next/link"
import MobileNavbar from "./navbar/MobileNavbar"

export default function MainHeader() {
  return (
    <header className="group/header fixed left-0 right-0 top-0 flex h-24 w-full origin-top items-center justify-between bg-neutral-50 p-2 transition-all !duration-300 hover:md:h-48 dark:bg-slate-800 z-30">
      <Link href="/article" className="h-full">
        <Image
          src={logo}
          alt="logo"
          className="h-full object-contain md:max-w-60 lg:max-w-72 dark:invert"
        />
      </Link>
      {/* description */}
      <div className="hidden flex-1 p-2 text-center font-mono font-bold opacity-0 transition-all delay-300 group-hover/header:-translate-y-2 group-hover/header:opacity-100 md:block">
        <p className="text-header lg:text-xl">{MAIN_HEADER_INTRO.mainline}</p>
        <p className="lg:text-md text-sm text-slate-600/80 dark:text-slate-400/80">
          {MAIN_HEADER_INTRO.Subline}
        </p>
      </div>

      {/* Nav */}
      <Navbar />
      {/* Mobile Nav */}
      <MobileNavbar />
    </header>
  )
}
