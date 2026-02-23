import { MemberMap } from '@/constants/member'
import { NANO_HYPHEN_KEY } from '@/constants/nano'

export default function decodeShuffleMember(value: string) {
  const list = value.split(NANO_HYPHEN_KEY)
  const isInValid = !list.every(id => MemberMap.has(id))

  if (isInValid) {
    return undefined
  }

  return list
}
