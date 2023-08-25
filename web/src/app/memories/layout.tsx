import BackToTimeline from '@/components/BackToTimeline'
import { ReactNode } from 'react'

export default function MemoriesIdLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <BackToTimeline />
      {children}
    </div>
  )
}
