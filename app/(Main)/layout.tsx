import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "../globals.css"

import MainHeader from "@/components/MainHeader"
import { METADATA } from "@/constants/metadata"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

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
      <body className={`relative ${inter.className}`}>
        <MainHeader />
        {children}</body>
    </html>
  )
}
