import { METADATA } from "@/constants/metadata"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
