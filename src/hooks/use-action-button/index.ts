import { useRouter } from 'next/navigation'

import { useCallback } from 'react'

import { toast } from '@/components/ui/toast'
import { MEMBERS } from '@/constants/member'
import { useClipboard } from '@/hooks/use-clipboard'
import getEncodeShuffleMember from '@/utils/get-encode-shuffle-member'
import getRandomIntByTimes from '@/utils/get-random-int-by-times'

export function useActionButton() {
  const clipboard = useClipboard({ timeout: 1000 })

  const router = useRouter()
  const onDrawing = useCallback(() => {
    router.push(`/r?id=${getEncodeShuffleMember()}`)
  }, [router])

  const onPicking = useCallback(() => {
    const index = getRandomIntByTimes(MEMBERS.length, 1000)
    toast.info(MEMBERS[index])
  }, [toast])

  const onGrouping = useCallback(
    (groups: number) => {
      router.push(`/g?id=${getEncodeShuffleMember()}&gs=${groups}`)
    },
    [router]
  )

  const onCopyURL = useCallback(() => {
    clipboard.copy(window.location.href)
    toast.success('Copied  ✨')
  }, [clipboard])

  return {
    onDrawing,
    onPicking,
    onGrouping,
    onCopyURL,
  }
}
