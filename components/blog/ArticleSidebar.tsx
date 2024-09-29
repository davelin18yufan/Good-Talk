"use client"

import { ARTICLE_SEARCHBAR_PLACEHOLDERS, BLOG_FILTERS } from "@/constants"
import Link from "next/link"
import Filter from "../Filter"
import { PlaceholdersAndVanishInput } from "../form/PlaceholdersAndVanishInput"
import { Button } from "../ui/button"
import AvatarGallery from "./AvatarGallery"
import ButtonLink from "../buttons/ButtonLink"

// !If replace this dummy data,  remove remotePatterns in nextConfig
const persons = [
  {
    id: "1",
    url: "https://res.cloudinary.com/dzl9yxixg/image/upload/adrian_ibdgmu.png",
    title: "Adrian Paul",
    description: "COO & Co-Founder",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },

  {
    id: "2",
    url: "https://res.cloudinary.com/dzl9yxixg/image/upload/person-portrait_pwxyyj.jpg",
    title: "Flualy Cual",
    description: "Founder & CEO",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/dzl9yxixg/image/upload/naymr_bmv5ac.png",
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
]

export default function ArticleSidebar() {
  return (
    <div className="flex flex-col gap-y-2.5 rounded-lg">
      <h2 className="text-xl font-semibold">Panel</h2>
      <div className="bg-tertiary space-y-4 rounded-lg border p-4 dark:border-transparent">
        <div className="flex justify-around space-x-2">
          <ButtonLink>
            <Link href="/dashboard">To Dashboard</Link>
          </ButtonLink>
          <ButtonLink>
            <Link href="/admin">To Admin</Link>
          </ButtonLink>
        </div>
        <div className="flex flex-col gap-4">
          <PlaceholdersAndVanishInput
            placeholders={ARTICLE_SEARCHBAR_PLACEHOLDERS}
            onChange={() => {}}
            onSubmit={() => {}}
          />
          <Filter
            filters={BLOG_FILTERS}
            containerClasses="rounded-full"
            otherClasses="!bg-input pl-12"
          />
        </div>
        <div>
          <h3 className="font-semibold flex justify-between">
            Author List
            <ButtonLink>
              <Link href="/authors" className="text-sm opacity-70">See More..</Link>
            </ButtonLink>
          </h3>
          <div className="flex flex-col gap-y-2 py-4">
            {/* 3 Cards a row, slice array into 3 */}
            <AvatarGallery authors={persons} />
            <AvatarGallery authors={persons} />
          </div>
        </div>
      </div>
    </div>
  )
}
