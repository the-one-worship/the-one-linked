'use client'

import { openGroupingPanel } from '@/components/grouping-panel'
import { DoubleButton } from '@/components/ui/double-button'
import { closeOverlay } from '@/components/ui/overlay'
import { useActionButton } from '@/hooks/use-action-button'
import { cn } from '@/lib/class-name'

export function ActionButtons({
  className,
  onClose,
}: {
  className?: string
  onClose?: () => void
}) {
  const { onPicking, onDrawing, onGrouping, onCopyURL } = useActionButton()
  return (
    <div
      data-slot="action-buttons"
      className={cn('flex flex-col gap-6', className)}
    >
      <DoubleButton
        className="w-full"
        variant="secondary"
        onClick={() => {
          onDrawing()
          onClose?.()
        }}
      >
        Drawing
      </DoubleButton>
      <DoubleButton
        className="w-full"
        variant="secondary"
        onClick={() => {
          onPicking()
          onClose?.()
        }}
      >
        Pick up
      </DoubleButton>
      <DoubleButton
        className="w-full"
        variant="secondary"
        onClick={() => {
          onClose?.()
          const dialogId = openGroupingPanel({
            onSubmit: ({ groups }) => {
              onGrouping(groups)
              closeOverlay(dialogId)
            },
          })
        }}
      >
        Grouping
      </DoubleButton>
      <DoubleButton
        className="w-full"
        variant="secondary"
        onClick={() => {
          onCopyURL()
          onClose?.()
        }}
      >
        Copy URL
      </DoubleButton>
    </div>
  )
}
