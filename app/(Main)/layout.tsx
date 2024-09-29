import type { Metadata } from "next"

import MainHeader from "@/components/MainHeader"
import { METADATA } from "@/constants/metadata"

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-primary text-header min-h-screen pt-32">
      <div className="container">
        <MainHeader />
        {children}
      </div>
    </div>
  )
}
