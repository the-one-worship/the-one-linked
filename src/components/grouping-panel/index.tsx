'use client'

import {
  GroupingForm,
  type GroupingFormValues,
} from '@/components/grouping-form'
import { Dialog } from '@/components/ui/dialog'
import {
  openOverlay,
  type OverlayComponentProps,
} from '@/components/ui/overlay'

type GroupingPanelProps = OverlayComponentProps & {
  onSubmit: (data: GroupingFormValues) => void
}

export function GroupingPanel({
  open,
  onOpenChange,
  onSubmit,
}: GroupingPanelProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content className="z-drawer p-16">
        <Dialog.Title>Enter Groups</Dialog.Title>
        <GroupingForm onSubmit={onSubmit}></GroupingForm>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export function openGroupingPanel(
  props: Omit<GroupingPanelProps, 'open' | 'onOpenChange'>
) {
  return openOverlay(GroupingPanel, props)
}
