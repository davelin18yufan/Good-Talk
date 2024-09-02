import Image from "next/image"
import logo from "@/public/logo.svg.svg"
import { MAIN_HEADER_INTRO } from "@/constants/metadata"

export default function MainHeader() {
  return (
    <header className="group fixed left-0 right-0 top-0 h-24 w-full origin-top bg-neutral-50 transition-all !duration-300 hover:h-48 dark:bg-slate-800 overflow-hidden p-2 flex items-center">
      <Image src={logo} alt="logo" className="max-w-60 lg:max-w-72 h-full object-contain dark:invert" />
      {/* description */}
      <div className="hidden md:block opacity-0 font-mono font-bold group-hover:opacity-100 group-hover:-translate-y-2 transition-all delay-300 text-center">
        <p className="lg:text-xl text-header">{MAIN_HEADER_INTRO.mainline}</p>
        <p className="text-sm lg:text-md text-slate-600/80 dark:text-slate-400/80">{MAIN_HEADER_INTRO.Subline}</p>
      </div>
      {/* Nav */}
    </header>
  )
}
