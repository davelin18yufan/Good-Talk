"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FilterItem {
  name: string
  value: string
}

interface FilterGroup {
  groupName: string
  items: FilterItem[]
}

interface FilterProps {
  filters: FilterGroup[]
  otherClasses?: string
  containerClasses?: string
}

const Filter = ({ filters, otherClasses, containerClasses }: FilterProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const paramFilter = searchParams.get("filter")

  // if the value changed, update query-string
  function handleUpdateParams(value: string) {
    const currentParams = new URLSearchParams(searchParams)
    if (value === "none") {
      currentParams.delete("filter")
    } else {
      currentParams.set("filter", value)
    }
    router.replace(`${pathname}?${currentParams.toString()}`)
  }

  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger
          className={`${otherClasses} light-border rounded-full border py-3 focus:ring-0 focus:ring-offset-0 active:scale-100`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <Image
              src="/filter.svg"
              width={16}
              height={16}
              alt="filter"
              className="absolute left-3 top-1/2 -translate-y-2 opacity-50 dark:invert"
            />
            <SelectValue placeholder="Select a Filter"/>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-primary border-none">
          <SelectItem
            value="none"
            className="focus:bg-secondary cursor-pointer"
          >
            None
          </SelectItem>
          {filters.map((group) => (
            <SelectGroup key={group.groupName}>
              <p className="px-3 py-1 text-sm font-semibold">
                {group.groupName}
              </p>
              {group.items.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  className="focus:bg-secondary cursor-pointer"
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
