import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

<<<<<<< HEAD
const inter = Inter({ subsets: ["latin"] })
=======
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
>>>>>>> feature/mainPage_articleList_Footer

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
<<<<<<< HEAD
      <body className={inter.className}>
        {children}
      </body>
=======
      <body className={`relative ${inter.className}`}>
        {children}</body>
>>>>>>> feature/mainPage_articleList_Footer
    </html>
  )
}
