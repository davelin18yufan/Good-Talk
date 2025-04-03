import { cn } from "@/lib/utils"
import { Author } from "@/types/blog"
import {
  Badge,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Progress,
} from "../ui"
import { Shield, MapPin, LogOut, Settings, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import { MenuItem } from "../navbar"
import { userCardItems } from "@/api"
import { ROUTES } from "@/constants/routes"

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

export function ProfileMenu({
  setActive,
  active,
  triggerClass,
  itemClass,
  user,
}: {
  setActive: (value: string | null) => void
  active: string | null
  triggerClass?: string
  itemClass?: string
  user: Author
}) {
  return (
    <MenuItem
      setActive={setActive}
      active={active}
      item="profileMenu"
      itemClasses={itemClass}
      trigger={
        <Link
          href={ROUTES.PROFILE()}
          className={cn(
            "flex-center text-header origin-top flex-col gap-2 px-2 py-1 opacity-0 transition-all hover:rotate-6 hover:!delay-0 group-hover/header:-translate-y-2 group-hover/header:opacity-100",
            triggerClass,
          )}
          style={{ transitionDelay: `${NAV_LINKS.length * 100 + 300}ms` }}
        >
          <User className="h-5 w-5 dark:text-white" />
          {NAV_LINKS.find((nav) => nav.route === ROUTES.PROFILE())?.tabName}
        </Link>
      }
    >
      <article className="relative rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50/50 to-zinc-100/50 p-6 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900/50">
        <div className="mb-6 flex items-start justify-between">
          <div className="mb-6 flex items-start justify-between gap-4 lg:gap-6">
            <figure className="flex basis-1/3 flex-col items-center">
              <Image
                src={user.url as string}
                alt={user.name}
                width={72}
                height={72}
                className="aspect-square rounded-xl object-cover ring-2 ring-zinc-100 dark:ring-zinc-800"
              />
              <Badge
                variant="secondary"
                className="mt-2 border-amber-200/50 bg-gradient-to-r from-amber-200 to-amber-300 px-2 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-800/50 dark:from-amber-700/50 dark:to-amber-600/50 dark:text-amber-400"
              >
                Maker
              </Badge>
            </figure>

            <div className="min-w-48 flex-1 space-y-1">
              <h4 className="text-paragraph text-lg">{user.name}</h4>
              <p className="text-lighter text-sm">{user.email}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <Button
              variant="ghost"
              size="icon"
              className="text-btn hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              <LogOut className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-btn hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats and Level */}
        {/* //TODO: need to replace using the API */}
        <div className="space-y-4">
          {userCardItems.map((item) => (
            <div
              key={item.label}
              className="bg-tertiary rounded-xl border border-zinc-200/50 p-4 dark:border-zinc-800/50"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-lg font-semibold">{item.value}</span>
              </div>
              {item.progress ? (
                <div className="space-y-2">
                  <Progress value={item.progress} className="h-2" />
                  <p className="text-suberxt text-xs">{item.desc}</p>
                </div>
              ) : (
                <p className="text-subtext text-xs">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </article>
    </MenuItem>
  )
}
