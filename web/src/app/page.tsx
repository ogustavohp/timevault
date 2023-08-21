import BgBlur from '@/components/BgBlur'
import Copyright from '@/components/Copyright'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import Signin from '@/components/Signin'
import Stripes from '@/components/Stripes'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover p-16 px-28 py-16">
        <BgBlur />
        <Stripes />
        <Signin />
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
