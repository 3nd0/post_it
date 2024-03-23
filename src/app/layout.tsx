import './globals.css'
import type { Metadata } from 'next'
import SideBar from '@/components/SideBar'

export const metadata: Metadata = {
  title: 'Post it',
  description: 'Take notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  )
}
