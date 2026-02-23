import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/class-name'

function DoubleButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <div className={cn('group relative inline-block', className)}>
      <Button
        data-slot="double-button-top"
        className={cn(
          'relative z-1 w-full group-hover:translate-x-1 group-hover:translate-y-1',
          { 'border-foreground': props.variant === 'outline' }
        )}
        {...props}
      />
      <Button
        data-slot="double-button-bottom"
        className="border-foreground absolute -right-1 -bottom-1 z-0 w-full"
        variant="outline"
      />
    </div>
  )
}

export { buttonVariants, DoubleButton }
