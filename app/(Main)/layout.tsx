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
    <div className="bg-primary text-header container pt-32 min-h-screen">
      <MainHeader />
      {children}
    </div>
  )
}
