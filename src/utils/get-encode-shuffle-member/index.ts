import { MEMBERS_LIST } from '@/constants/member'
import { NANO_HYPHEN_KEY } from '@/constants/nano'
import shuffle from '@/utils/shuffle'

export default function getEncodeShuffleMember() {
  const newMemberList = shuffle(MEMBERS_LIST)
  return newMemberList.map(({ key }) => key).join(NANO_HYPHEN_KEY)
}
