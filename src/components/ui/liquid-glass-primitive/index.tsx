'use client'

import * as React from 'react'

import { Portal } from '@/components/ui/portal'
import { cn } from '@/lib/class-name'

export const ALISON_UI_GLASS_FILTER_ID = 'the-one-glass-refraction'

export const liquidGlassVariant = cn(
  'pointer-events-auto relative border-0 text-white',
  'bg-white/10 hover:bg-white/20',
  // don't remove this, wait for designer to approve the new design
  // 'shadow-[0_6px_20px_-4px_rgba(0,0,0,0.35)]',
  '[backdrop-filter:url(#the-one-glass-refraction)_blur(2px)]',
  `[-webkit-backdrop-filter:url(#the-one-glass-refraction)_blur(2px)]`,
  'before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]',
  'before:border before:border-white/50',
  'before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(255,255,255,0.12)]',
  'before:[-webkit-mask:linear-gradient(45deg,transparent_4%,white_32%,white_68%,transparent_96%)]',
  'before:[mask:linear-gradient(45deg,transparent_4%,white_32%,white_68%,transparent_96%)]'
)

const instances: symbol[] = []
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach(listener => listener())
}

function useIsPrimaryInstance() {
  const id = React.useMemo(() => Symbol('liquid-glass-filter'), [])

  const subscribe = React.useCallback((onChange: () => void) => {
    listeners.add(onChange)
    return () => {
      listeners.delete(onChange)
    }
  }, [])

  const getSnapshot = React.useCallback(() => instances[0] === id, [id])

  React.useEffect(() => {
    instances.push(id)
    emit()
    return () => {
      const index = instances.indexOf(id)
      if (index !== -1) instances.splice(index, 1)
      emit()
    }
  }, [id])

  return React.useSyncExternalStore(subscribe, getSnapshot, () => false)
}

export function LiquidGlassFilter({ ...props }: React.ComponentProps<'svg'>) {
  const isPrimaryInstance = useIsPrimaryInstance()

  if (!isPrimaryInstance) return null

  return (
    <Portal container={() => document.body}>
      <svg
        aria-hidden
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
          ...props.style,
        }}
        data-slot="liquid-glass-filter"
        {...props}
      >
        <filter
          id={ALISON_UI_GLASS_FILTER_ID}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.014"
            numOctaves={2}
            seed={3}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation={3} result="softened" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softened"
            scale={14}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </Portal>
  )
}
