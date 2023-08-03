import Image from 'next/image'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site de animes',
  description: 'Site para assistir animes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-100">{children}</body>
    </html>
  )
}
