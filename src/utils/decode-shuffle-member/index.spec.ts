import { MEMBERS_LIST } from '@/constants/member'
import { NANO_HYPHEN_KEY } from '@/constants/nano'

import decodeShuffleMember from '.'

describe('decodeShuffleMember', () => {
  describe('when code is valid', () => {
    it('should returned member list', () => {
      expect(
        decodeShuffleMember(
          `${MEMBERS_LIST[0].key}${NANO_HYPHEN_KEY}${MEMBERS_LIST[1].key}`
        )
      ).toEqual([MEMBERS_LIST[0].key, MEMBERS_LIST[1].key])
    })
  })
  describe('when code is invalid', () => {
    it('should returned "undefined"', () => {
      expect(
        decodeShuffleMember(
          'tHJh-1eiX--A3aj-4GLQ-g4zn-1eiX-4GLQ-RnXO-1eiX-4GLQ-fjOo-1eiX-4GLQ-aVL8-1eiX-4GLQ-tgJ0'
        )
      ).toBe(undefined)
    })
  })
})
