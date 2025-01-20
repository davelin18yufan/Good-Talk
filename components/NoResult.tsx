"use client"

import Image from "next/image"
import Link from "next/link"
import ButtonLink from "./buttons/ButtonLink"
import { CloudAlertIcon } from "lucide-react"
// import { Button } from "../ui/button"
// import { toast } from "../ui/use-toast"
// import { useAuth } from "@clerk/nextjs"

interface Props {
  title: string
  description: string
  link: string
  linkTitle: string
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  // const { userId } = useAuth()
  // if (!userId) {
  //   toast({
  //     title: "You have to login first!",
  //     variant: "destructive",
  //   })
  // }

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <CloudAlertIcon
        className="text-primary-500 dark:text-primary-500"
        width={180}
        height={150}
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <ButtonLink className="paragraph-medium px-4 py-3">
          {linkTitle}
        </ButtonLink>
      </Link>
    </div>
  )
}

export default NoResult
