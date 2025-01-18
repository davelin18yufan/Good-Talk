"use client"
import Image from "next/image"
import React, { useState } from "react"
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react"
import { type Author } from "@/types/blog"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ProfileList } from "./ProfileCard"
import Link from "next/link"

export const AvatarTooltip = ({ persons }: { persons: Author[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | string>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  )
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <div className="flex-center">
      {persons.map((person, idx) => (
        <Link
          href={`profile/${person.id}`}
          className="group relative -mr-4"
          key={person.name}
          onMouseEnter={() => setHoveredIndex(person.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === person.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {person.name}
                </div>
                <div className="text-xs text-white">{person.aka}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={person.url as string | StaticImport}
            alt={person.name}
            className="relative !m-0 size-14 rounded-full border-2 border-primary-light object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 lg:size-20"
          />
        </Link>
      ))}
      {persons.length > 8 && (
        <Dialog>
          <DialogTrigger asChild key="more-followers">
            <Button
              variant="ghost"
              className={cn(
                "rounded-full dark:hover:bg-transparent",
                "transition-transform hover:scale-110",
                "hover:bg-transparent",
              )}
            >
              <p className="text-subtext bg-secondary relative left-2 z-10 rounded-md px-2 py-1 text-base font-bold">
                ... {persons.length - 10}+
              </p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[50vh]">
            <div className="bg-tertiary rounded-md p-3">
              <DialogHeader>
                <DialogTitle className="text-header text-2xl font-bold">
                  All Followers {persons.length}+
                </DialogTitle>
              </DialogHeader>
              <ProfileList persons={persons} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
