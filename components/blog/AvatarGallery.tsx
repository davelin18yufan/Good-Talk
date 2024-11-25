import Image from "next/image"
import { AvatarFallback } from "../ui/avatar"
import type { Author } from "@/types/blog"

export function AvatarCard({ person }: { person: Author }) {
  return (
    <article
      className="group/article relative w-full overflow-hidden rounded-xl transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity after:absolute after:inset-0 after:rounded-lg after:bg-white/30 after:opacity-0 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300 focus-within:before:opacity-100 md:before:opacity-0 md:hover:before:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 md:group-hover:[&:not(:hover)]:w-[20%] md:group-hover:[&:not(:hover)]:after:opacity-100"
      style={{
        transitionTimingFunction: "cubic-bezier(.5,.85,.25,1.15)",
      }}
    >
      <a
        className="absolute inset-0 z-10 flex flex-col justify-end p-3 text-white"
        href="#0"
      >
        <h3
          className="text-md font-medium transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-300 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-300 md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0"
          style={{
            transitionTimingFunction: "cubic-bezier(.5,.85,.25,1.8)",
          }}
        >
          {person?.name}
        </h3>
        <span
          className="text-lg font-medium transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-500 max-md:hidden md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0"
          style={{
            transitionTimingFunction: "cubic-bezier(.5,.85,.25,1.8)",
          }}
        >
          {person?.description}
        </span>
      </a>
      {person.url ? (
        <Image
          className="h-28 w-full object-cover md:h-36"
          src={person?.url}
          width="480"
          height="360"
          alt={person.name}
        />
      ) : (
        <AvatarFallback>{person.name[0]}</AvatarFallback>
      )}
    </article>
  )
}

function AvatarGallery({ authors }: { authors: Author[] }) {
  return (
    <div className="group mx-auto flex justify-center gap-2 md:w-[80%]">
      {authors.map((person, i: number) => (
        <AvatarCard {...{ person }} key={person.id} />
      ))}
    </div>
  )
}

export default AvatarGallery
