'use client'

import { type ComponentType, useSyncExternalStore } from 'react'

// ============================================================================
// Types
// ============================================================================

export interface OverlayComponentProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
}

interface OverlayInstance {
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>
  props: Record<string, unknown>
}

// ============================================================================
// Store
// ============================================================================

function createStore<T>(initialState: T) {
  let state = initialState
  const listeners = new Set<() => void>()

  return {
    getSnapshot: () => state,
    subscribe: (listener: () => void) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    setState: (updater: (prev: T) => T) => {
      state = updater(state)
      listeners.forEach(l => l())
    },
  }
}

const overlayStore = createStore<OverlayInstance[]>([])

// ============================================================================
// Public API
// ============================================================================

export function openOverlay<P extends OverlayComponentProps>(
  component: ComponentType<P>,
  props: Omit<P, 'open' | 'onOpenChange'>
): string {
  const id = crypto.randomUUID()
  overlayStore.setState(prev => [
    ...prev,
    { id, component, props: props as Record<string, unknown> },
  ])
  return id
}

export function closeOverlay(id: string): void {
  overlayStore.setState(prev => prev.filter(o => o.id !== id))
}

export function closeAllOverlays(): void {
  overlayStore.setState(() => [])
}

// ============================================================================
// React Component
// ============================================================================

export function Overlays() {
  const overlays = useSyncExternalStore(
    overlayStore.subscribe,
    overlayStore.getSnapshot,
    overlayStore.getSnapshot
  )

  return (
    <>
      {overlays.map(({ id, component: Component, props }) => (
        <Component
          key={id}
          {...props}
          open={true}
          onOpenChange={(open: boolean) => {
            if (!open) closeOverlay(id)
          }}
        />
      ))}
    </>
  )
}
