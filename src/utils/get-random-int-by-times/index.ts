import getRandomInt from '@/utils/get-random-int'

export default function getRandomIntByTimes(max: number, times: number = 1) {
  if (times <= 0) {
    throw new Error('at least 1 time')
  }
  const arr = Array.from({ length: times }).map(_ => getRandomInt(max))

  return arr[getRandomInt(times)]
}
