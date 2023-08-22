import { cookies } from 'next/headers'
import BgBlur from '@/components/BgBlur'
import Copyright from '@/components/Copyright'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import Signin from '@/components/Signin'
import Stripes from '@/components/Stripes'
import Profile from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')
  return (
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
        <EmptyMemories />
      </div>
    </main>
  )
}
