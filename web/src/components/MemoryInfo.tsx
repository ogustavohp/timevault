import Image from 'next/image'
import React from 'react'

interface MemoryInfoType {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

export default function MemoryInfo({
  coverUrl,
  content,
  createdAt,
}: MemoryInfoType) {
  return (
    <>
      <div className="-ml-16 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {createdAt}
      </div>
      <Image
        alt=""
        src={coverUrl}
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />
      {/* <div>{coverUrl}</div> */}
      <div className="leading-relaxed text-gray-100">{content}</div>
    </>
  )
}
