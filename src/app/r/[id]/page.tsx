'use client'
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

type Props = {
  params: { id: string }
}

// handle legacy features
export default function RenderPage({ params: { id } }: Props) {
  const router = useRouter()

  useEffect(() => {
    router.push(`/r?id=${id}`)
  }, [id, router])

  return <></>
}
