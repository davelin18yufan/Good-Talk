"use client"
import Image from "next/image"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import type { BaseBlog } from "@/types/blog"
import { DEFAULT_COVER_URL } from "@/constants"
import Link from "next/link"

export const BlogFocusCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: BaseBlog
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <Link
      href={`/blog/${card.id}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative block aspect-square w-full cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out max-sm:max-h-36 dark:bg-neutral-900",
        hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
        [0, 3, 4].includes(index) ? "lg:h-[360px]" : "lg:h-64",
      )}
    >
      <Image
        src={card.coverUrl || DEFAULT_COVER_URL}
        alt={card.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="absolute inset-0 object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="flex w-full flex-wrap items-end justify-between gap-x-4 truncate bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
          {card.title}
          <span className="md:text-md to-neutral-300/50 text-sm font-medium">
            {card.author.name}
          </span>
        </div>
      </div>
    </Link>
  ),
)

BlogFocusCard.displayName = "Card"

export function BlogGallery({ blogs }: { blogs: BaseBlog[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="mx-auto w-full columns-1 gap-2 space-y-1 overflow-hidden sm:columns-2 md:px-8 lg:columns-3">
      {blogs.map((blog, index) => (
        <BlogFocusCard
          key={blog.id}
          card={blog}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
