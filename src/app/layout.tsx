import './globals.css'

import type { Metadata } from 'next'
import { Geist as FontSans } from 'next/font/google'

import { ThemeProvider } from 'next-themes'

import { Sidebar } from '@/components/sidebar'
import { Overlays } from '@/components/ui/overlay'
import { Toaster } from '@/components/ui/toast'
import { cn } from '@/lib/class-name'

const fontSans = FontSans({
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
          <Sidebar />
          <Toaster position="top-right" />
          <Overlays />
        </ThemeProvider>
      </body>
    </html>
  )
}
