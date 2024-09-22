import type { Metadata } from "next"

import MainHeader from "@/components/MainHeader"
import { METADATA } from "@/constants/metadata"

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="container mt-28 bg-primary text-header">
        <MainHeader />
        {children}</body>
    </html>
  )
}