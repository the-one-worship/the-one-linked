'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect, useMemo } from 'react'

import { MoveRightIcon } from 'lucide-react'

import { MemberMap } from '@/constants/member'
import decodeShuffleMember from '@/utils/decode-shuffle-member'
import getEncodeShuffleMember from '@/utils/get-encode-shuffle-member'

export default function RenderPage() {
  const searchParams = useSearchParams()
  const ids = useMemo(() => {
    const id = searchParams.get('id') || ''
    return decodeShuffleMember(id)
  }, [searchParams])
  const groups = useMemo(
    () =>
      ids?.map((item, index) => {
        const isLastIdx = index === ids.length - 1
        const nextIdx = isLastIdx ? 0 : index + 1
        const next = ids[nextIdx]

        return [item, next].map(val => MemberMap.get(val))
      }),
    [ids]
  )
  const router = useRouter()

  useEffect(() => {
    if (ids) return
    router.push(`/r?id=${getEncodeShuffleMember()}`)
  }, [ids, router])

  return (
    <div className="flex items-center justify-center p-8">
      <ul className="grid gap-4">
        {groups?.map(([from, to]) => (
          <li
            key={`${from}-${to}`}
            className="grid grid-cols-3 gap-2 text-lg font-bold"
          >
            <p className="justify-self-end">{from}</p>
            <MoveRightIcon className="h-6 w-6 justify-self-center" />
            <p className="justify-self-start">{to}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
