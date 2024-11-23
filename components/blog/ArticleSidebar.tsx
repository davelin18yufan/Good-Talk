"use client"

import { ARTICLE_SEARCHBAR_PLACEHOLDERS, BLOG_FILTERS } from "@/constants"
import Link from "next/link"
import Filter from "../Filter"
import { PlaceholdersAndVanishInput } from "../form/PlaceholdersAndVanishInput"
import AvatarGallery from "./AvatarGallery"
import ButtonLink from "../buttons/ButtonLink"

// !If replace this dummy data,  remove remotePatterns in nextConfig
const persons = [
  {
    id: "126542",
    url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Adrian Paul",
    description: "COO & Co-Founder",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },

  {
    id: "765752",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Flualy Cual",
    description: "Founder & CEO",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
  {
    id: "45673",
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
]

export default function ArticleSidebar() {
  return (
    <article className="flex flex-col gap-y-2.5 rounded-lg">
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
          <h3 className="flex justify-between font-semibold">
            Author List
            <ButtonLink>
              <Link href="/authors" className="text-sm opacity-70">
                See More..
              </Link>
            </ButtonLink>
          </h3>
          {/* //TODO:Desktop: 3 Cards a row, slice array into 3 */}
          <div className="flex flex-col gap-y-2 py-4 max-md:hidden">
            <AvatarGallery authors={persons} />
            <AvatarGallery authors={persons} />
          </div>
          {/* //TODO:Mobile: 6 Cards in a row */}
          <div className="md:hidden">
            <AvatarGallery authors={persons.concat(persons)} />
          </div>
        </div>
      </div>
    </article>
  )
}
