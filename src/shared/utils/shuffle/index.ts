export default function shuffle<T>(array: T[]) {
  const arrCopy = JSON.parse(JSON.stringify(array)) as T[]
  arrCopy.sort(() => Math.random() - 0.5)

  return arrCopy
}