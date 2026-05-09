import type { Metadata } from 'next'
import { DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coffee Never Sleeps LLC — Expert Coffee Consulting',
  description:
    'Tom Sessions brings 25+ years of coffee industry expertise to your project. Consulting on sourcing, roasting, private label, liquid concentrates, and RTDs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSerif.variable}>
      <body>{children}</body>
    </html>
  )
}
