'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect, useMemo } from 'react'
import { Suspense } from 'react'

import { MemberMap } from '@/constants/member'
import decodeShuffleMember from '@/utils/decode-shuffle-member'
import getEncodeShuffleMember from '@/utils/get-encode-shuffle-member'
import grouping from '@/utils/grouping'

export function GroupingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const groupLength = useMemo(() => {
    const res = searchParams.get('gs') || ''
    return parseInt(res, 10) || 2
  }, [searchParams])

  const ids = useMemo(() => {
    const id = searchParams.get('id') || ''
    return decodeShuffleMember(id)
  }, [searchParams])

  const groups = useMemo(() => {
    const members = ids?.map(item => MemberMap.get(item) as string)
    if (!members) return
    return grouping(members, groupLength)
  }, [groupLength, ids])

  useEffect(() => {
    if (ids) return
    router.push(`/g?id=${getEncodeShuffleMember()}&gs=${groups}`)
  }, [groupLength, groups, ids, router])

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 p-4">
      {groups?.map(group => (
        <div
          key={group.key}
          className="flex w-full max-w-sm flex-wrap gap-4 rounded-lg border p-4"
        >
          {group?.value?.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function GroupingPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GroupingPage />
    </Suspense>
  )
}
