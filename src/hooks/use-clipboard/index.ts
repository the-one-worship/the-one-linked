import { useCallback, useMemo, useState } from 'react'

export function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error | null>(null)
  const [copied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<number | null>(null)

  const handleCopyResult = useCallback(
    (value: boolean) => {
      window.clearTimeout(copyTimeout!)
      setCopyTimeout(window.setTimeout(() => setCopied(false), timeout))
      setCopied(value)
    },
    [copyTimeout, timeout]
  )

  const copy = useCallback(
    (valueToCopy: string) => {
      if ('clipboard' in navigator) {
        navigator.clipboard
          .writeText(valueToCopy)
          .then(() => handleCopyResult(true))
          .catch(err => setError(err))
      } else {
        setError(
          new Error('useClipboard: navigator.clipboard is not supported')
        )
      }
    },
    [handleCopyResult]
  )

  const reset = useCallback(() => {
    setCopied(false)
    setError(null)
    window.clearTimeout(copyTimeout!)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(
    () => ({ copy, reset, error, copied }),
    [copied, copy, error, reset]
  )
}
