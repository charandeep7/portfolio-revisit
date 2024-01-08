import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import mybg from '@/public/home-background.png'
import { Toaster } from 'react-hot-toast'
import StarsCanvas from './_components/StarBg.tsx/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charandeep | Portfolio',
  description: 'Charandeep Kumar (Kitish) studying in IIIT Lucknow. He\'s currently in B.Tech 3rd year.',
}
export const revalidate = 600;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-cover relative selection:text-pink-500 selection:bg-muted ${inter.className}`}>
        <StarsCanvas />
        <Toaster />
        <Image src={mybg} alt='bg' fill className='z-[-99]' priority />
        {children}
      </body>
    </html>
  )
}