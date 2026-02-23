import { LEGACY_IDS } from '@/constants/legacy'

// handle legacy features
export function generateStaticParams() {
  return LEGACY_IDS.map(id => ({ id }))
}

export default function RenderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
