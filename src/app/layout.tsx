import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dg.tools | Flat-Rate Time Tracking for Small Teams',
  description: 'Simple, offline-first time tracking with zero per-seat fees. $9/month flat.',
  openGraph: {
    title: 'TimeMatrix by dg.tools',
    description: 'Flat-rate time tracking software for freelancers and small teams.',
    url: 'https://dg.tools',
    siteName: 'dg.tools',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="page-container">{children}</main>
      </body>
    </html>
  )
}
