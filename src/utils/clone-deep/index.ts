export default function cloneDeep<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => cloneDeep(item)) as T
  }

  const copiedObject = {} as T

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copiedObject[key] = cloneDeep(obj[key])
    }
  }

  return copiedObject
}
