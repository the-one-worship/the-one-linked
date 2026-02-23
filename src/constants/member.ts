import { NANO_ID_LIST } from './nano'

export const MEMBERS = [
  '阿龐',
  '孟梵',
  '宣耀',
  '嘉儒',
  '惟心',
  '梁容',
  '培倫',
  '依柔',
  '昇翰',
  '婕茹',
  '維恩',
]

export const MEMBERS_LIST = MEMBERS.map((value, index) => ({
  key: NANO_ID_LIST[index],
  value,
}))

export const MemberMap = new Map(
  MEMBERS_LIST.map(({ key, value }) => [key, value])
)
