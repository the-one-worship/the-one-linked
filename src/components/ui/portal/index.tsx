'use client'
import * as React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children?: React.ReactNode
  container: Element | (() => Element | null) | null
  disablePortal?: boolean
  ref?: React.Ref<Element>
}

function getContainer(container: PortalProps['container']) {
  return typeof container === 'function' ? container() : container
}

export function Portal({
  children,
  container,
  disablePortal = false,
  ref,
}: PortalProps) {
  const [mountNode, setMountNode] = React.useState<Element | null>(null)

  React.useEffect(() => {
    const node = getContainer(container)
    if (!node || disablePortal || node === mountNode) return

    setMountNode(node)
  }, [container, disablePortal, mountNode])

  React.useEffect(() => {
    if (!mountNode || disablePortal || !ref) return

    if (typeof ref === 'function') {
      ref(mountNode)
    } else {
      ref.current = mountNode
    }
    return () => {
      if (typeof ref === 'function') {
        ref(null)
      } else if (ref.current) {
        ref.current = null
      }
    }
  }, [ref, mountNode, disablePortal])

  if (disablePortal) {
    return <>{children}</>
  }

  return mountNode ? createPortal(children, mountNode) : null
}
