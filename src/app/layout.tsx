import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Navbar } from '@/shared/components/navbar'
import { cn } from '@/shared/helpers/class-name'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'The One Linked',
  description: 'The One Linked',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  )
}
