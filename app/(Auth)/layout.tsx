import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "../globals.css"

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
  title: "Good Talk",
  description: "To boost your investment performance",
}
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-primary grid min-h-screen place-items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
