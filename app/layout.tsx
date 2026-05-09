import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffee Never Sleeps LLC — Expert Coffee Consulting',
  description:
    'Tom Sessions brings 25+ years of coffee industry expertise to your project. Consulting on sourcing, roasting, private label, liquid concentrates, and RTDs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
