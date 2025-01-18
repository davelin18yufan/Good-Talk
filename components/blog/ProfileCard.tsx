import { cn } from "@/lib/utils"
import { Author } from "@/types/blog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../ui/badge"
import { Shield, MapPin } from "lucide-react"
import Link from "next/link"

export function ProfileList({ persons }: { persons: Author[] }) {
  return (
    <article className="divide-invert mt-2 flex h-[60vh] flex-col gap-1 divide-y overflow-y-scroll">
      {persons.map((member) => (
        <Link
          key={member.id}
          href={`/profile/${member.id}`}
          className={cn(
            "rounded-md px-2 py-3",
            "transition-colors duration-200",
            "hover:bg-primary",
          )}
        >
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <figure className="relative">
              <Avatar className="bg-muted-background size-16 border dark:bg-foreground">
                <AvatarImage
                  src={member?.url}
                  alt={member.name}
                  className="object-cover"
                />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              {/* //?Status */}
              <div
                className={cn(
                  "absolute bottom-0 right-0",
                  "h-3.5 w-3.5 rounded-full",
                  "bg-emerald-500 ring-2 ring-white dark:ring-zinc-900",
                  // member.availability === "available" &&
                  //   "bg-emerald-500",
                  // member.availability === "busy" && "bg-amber-500",
                  // member.availability === "offline" &&
                  //   "bg-zinc-300 dark:bg-zinc-600",
                )}
              />
            </figure>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <h3 className="text-paragraph mb-1 text-base font-semibold">
                {member.name}
              </h3>

              <div className="mb-3 flex items-center gap-3 text-nowrap text-sm text-muted-foreground">
                <p className="line-clamp-1 flex items-center gap-1.5">
                  <Shield className="h-4 w-4" />
                  {member.aka}
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {member.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {member.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="default"
                    className="!text-subtext bg-gray-300 dark:bg-zinc-600"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </article>
  )
}
