import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { ReactNode } from 'react'
import Copyright from '@/components/Copyright'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import Stripes from '@/components/Stripes'
import BgBlur from '@/components/BgBlur'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'TimeVault',
  description:
    'Uma cápsula do tempo feita com React, Next.js, Tailwindcss e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 ">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover p-16 px-28 py-16">
            <BgBlur />
            <Stripes />

            {isAuthenticated ? <Profile /> : <Signin />}
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
