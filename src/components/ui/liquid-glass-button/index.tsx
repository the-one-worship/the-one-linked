'use client'

import { Button } from '@/components/ui/button'
import {
  LiquidGlassFilter,
  liquidGlassVariant,
} from '@/components/ui/liquid-glass-primitive'
import { cn } from '@/lib/class-name'

type LiquidGlassButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'variant'
>

export function LiquidGlassButton({
  className,
  ...props
}: LiquidGlassButtonProps) {
  return (
    <>
      <LiquidGlassFilter />
      <Button
        className={cn(liquidGlassVariant, className)}
        data-slot="liquid-glass-button"
        {...props}
      />
    </>
  )
}
