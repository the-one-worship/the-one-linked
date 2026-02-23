import { nanoid } from 'nanoid'

export default function grouping<T>(source: Array<T>, groups: number) {
  if (groups <= 0) {
    throw new Error('at least 1 group')
  }

  const res = Array.from({ length: groups }) as Array<Array<T>>
  let groupIndex = 0
  for (let i = 0; i < source.length; i++) {
    groupIndex = groupIndex < groups ? groupIndex : 0
    const group = res[groupIndex] || []
    group.push(source[i])
    res[groupIndex] = group
    groupIndex++
  }
  return res.map(value => ({ key: nanoid(), value }))
}
