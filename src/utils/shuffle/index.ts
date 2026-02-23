import cloneDeep from '@/utils/clone-deep'

export default function shuffle<T>(array: T[]) {
  const result = cloneDeep(array)

  for (let i = 0; i < array.length; i++) {
    const randomIndex = Math.floor(Math.random() * (array.length - i)) + i
    ;[result[i], result[randomIndex]] = [result[randomIndex], result[i]]
  }
  return result
}
