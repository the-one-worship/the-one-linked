import { forwardRef } from 'react'

import {
  Button,
  type ButtonProps,
  buttonVariants,
} from '@/shared/components/ui/button'
import { cn } from '@/shared/helpers/class-name'

const DoubleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('group relative inline-block', className)}>
        <Button
          className={cn(
            'relative z-1 w-full group-hover:translate-x-1 group-hover:translate-y-1',
            { 'border-foreground': props.variant === 'outline' }
          )}
          ref={ref}
          {...props}
        />
        <Button
          className="absolute -bottom-1 -right-1 z-0 w-full border-foreground"
          variant="outline"
        />
      </div>
    )
  }
)
DoubleButton.displayName = 'DoubleButton'

export { buttonVariants, DoubleButton }
