import Image from 'next/image'
import timeVaultlogo from '../assets/timevault-logo.svg'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={timeVaultlogo} alt="Logo TimeVault" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl leading-tight">Sua cápsula do tempo</h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
