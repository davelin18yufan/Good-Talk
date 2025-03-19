"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ButtonEffect from "../buttons/ButtonEffect"
import BlurFade from "../BlurFade"
import Image from "next/image"
import type { BaseBlog } from "@/types/blog"
import { DEFAULT_COVER_URL } from "@/constants"

export function BlogSetCard({
  coverUrl,
  altText,
  title,
  author,
  id,
  tags,
  date,
  description,
}: BaseBlog) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.stopPropagation()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <article className="block cursor-pointer" onClick={handleClick}>
      <Card className="bg-tertiary flex gap-2 pb-0.5">
        {/* Cover */}
        <div className="relative w-1/6 min-w-24 overflow-hidden rounded-lg">
          <Image
            src={coverUrl || DEFAULT_COVER_URL}
            alt={altText || title}
            style={{
              transitionTimingFunction:
                "cubic-bezier(0.130, 0.620, 0.005, 1.040)",
            }}
            className="scale-[140%] object-cover transition duration-700 hover:scale-100"
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
                    src={author?.url}
                    alt={author.name}
                    className="object-contain"
                  />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* Title/Badges */}
              <div className="flex-1">
                <div className="flex items-center justify-between text-base">
                  <h3 className="inline-flex w-full text-start items-center justify-start gap-x-2 text-sm font-semibold leading-none md:text-base lg:text-xl truncate">
                    {title}
                    {tags && (
                      <span className="inline-flex flex-wrap gap-1 capitalize max-md:hidden font-medium">
                        {tags.map((tag, index) => (
                          <Badge
                            variant="outline"
                            className="bg-secondary align-middle max-md:text-xs"
                            key={index}
                          >
                            {tag}
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
                  <time className="text-right text-xs tabular-nums text-muted-foreground md:text-sm text-nowrap">
                    {date}
                  </time>
                </div>
                <div className="mt-1.5 font-sans text-sm max-md:text-xs">
                  {author.name}
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
              className={cn(
                "text-paragraph prose-sm relative clear-left",
                "line-clamp-3 text-ellipsis text-xs antialiased sm:text-sm",
              )}
            >
              <p className="line-clamp-3 pl-6 pr-24 py-0.5">{description}</p>
              <Link
                href={`article/${id}`}
                className="text-subtext absolute bottom-0 right-4"
              >
                <ButtonEffect emphasis={0} className="z-10 px-2 text-xs">
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

export function BlogSets({
  blogs,
  delay,
}: {
  blogs: BaseBlog[]
  delay: number
}) {
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={delay * 5}>
        <h2 className="text-xl font-bold">最新文章</h2>
      </BlurFade>
      {blogs.map((blog, id) => (
        <BlurFade key={blog.title} delay={delay * 6 + id * 0.05}>
          <BlogSetCard key={blog.title} {...blog} />
        </BlurFade>
      ))}
    </div>
  )
}
