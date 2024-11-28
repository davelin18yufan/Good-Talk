"use client"

import { ARTICLE_SEARCHBAR_PLACEHOLDERS, BLOG_FILTERS } from "@/constants"
import Link from "next/link"
import Filter from "../Filter"
import { PlaceholdersAndVanishInput } from "../form/PlaceholdersAndVanishInput"
import AvatarGallery from "./AvatarGallery"
import ButtonLink from "../buttons/ButtonLink"
import { persons } from "@/api"


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
