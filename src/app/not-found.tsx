import Link from 'next/link'

import { ActionButtons } from '@/components/action-buttons'
import { DoubleButton } from '@/components/ui/double-button'

export default function NotFound() {
  return (
    <div className="mx-auto flex h-[80vh] max-w-xs flex-col justify-center gap-8">
      <h2 className="text-center text-2xl font-bold uppercase">Not Found</h2>
      <section className="flex flex-col gap-8">
        <Link href="/">
          <DoubleButton className="w-full">Return Home</DoubleButton>
        </Link>
        <ActionButtons />
      </section>
    </div>
  )
}
