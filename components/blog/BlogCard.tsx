"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ButtonEffect from "../ButtonEffect"
import Image from "next/image"

interface ResumeCardProps {
  avatarUrl: string
  coverUrl: string
  altText: string
  title: string
  href?: string
  author: string
  badges?: readonly string[]
  date: string
  description?: string
}
export const BlogCard = ({
  avatarUrl,
  coverUrl,
  altText,
  title,
  author,
  href,
  badges,
  date,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.stopPropagation()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <article className="block cursor-pointer" onClick={handleClick}>
      <Card className="bg-tertiary flex gap-2">
        {/* Cover */}
        <div className="relative w-1/6 overflow-hidden rounded-lg">
          <Image
            src={coverUrl}
            alt={altText}
            style={{
              transitionTimingFunction:
                "cubic-bezier(0.130, 0.620, 0.005, 1.040)",
            }}
            className="object-fill transition duration-700 hover:scale-75"
            fill
            priority
          />
        </div>

        {/* Content */}
        <div className="group flex-1 flex-col items-center pb-2">
          <CardHeader className="pb-4">
            <div className="flex gap-4">
              {/* Author */}
              <div className="flex-none">
                <Avatar className="bg-muted-background m-auto size-12 border dark:bg-foreground">
                  <AvatarImage
                    src={avatarUrl}
                    alt={author}
                    className="object-contain"
                  />
                  <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* Title/Badges */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-2 text-sm font-semibold leading-none md:text-base lg:text-xl">
                    {title}
                    {badges && (
                      <span className="inline-flex gap-x-1 capitalize">
                        {badges.map((badge, index) => (
                          <Badge
                            variant="outline"
                            className="bg-secondary align-middle max-md:text-xs"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    )}
                    <ChevronRightIcon
                      className={cn(
                        "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                        isExpanded ? "rotate-90" : "rotate-0",
                      )}
                    />
                  </h3>
                  {/* Date */}
                  <div className="md:text-md text-right text-xs tabular-nums text-muted-foreground md:text-sm">
                    {date}
                  </div>
                </div>
                <div className="mt-1.5 font-sans text-sm max-md:text-xs">
                  {author}
                </div>
              </div>
            </div>
          </CardHeader>

          {/* Content */}
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-paragraph relative clear-left line-clamp-3 overflow-hidden text-ellipsis text-xs antialiased sm:text-sm"
            >
              <p className="line-clamp-3 pl-4 pr-24">{description}</p>
              {/* //TODO: article ID */}
              <Link
                href={href || "#"}
                className="text-subtext absolute bottom-0 right-4"
              >
                <ButtonEffect emphasis={0} className="px-2 py-1 text-xs">
                  More..
                </ButtonEffect>
              </Link>
            </motion.div>
          )}
        </div>
      </Card>
    </article>
  )
}
