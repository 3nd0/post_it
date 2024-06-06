import './globals.css'
import type { Metadata } from 'next'
import Dashboard from '../components/Dashboard'

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
          <Dashboard/>
          {children}
        </div>
      </body>
    </html>
  )
}
