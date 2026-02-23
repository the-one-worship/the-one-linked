'use client'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MEMBERS } from '@/constants/member'
import { cn } from '@/lib/class-name'

import { type FormValues, schema } from './schema'

export type GroupingFormValues = FormValues

type Props = {
  className?: string
  onSubmit: (data: FormValues) => void
}

export function GroupingForm({ className, onSubmit: onSubmitCallback }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = data => onSubmitCallback(data)

  return (
    <form
      className={cn('flex flex-col gap-4', className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="number"
        inputMode="numeric"
        className={cn(errors.groups ? ['border', 'border-red-400'] : '')}
        min={1}
        max={MEMBERS.length}
        {...register('groups', { required: true, valueAsNumber: true })}
      />
      <Button type="submit" variant="outline">
        Submit
      </Button>
    </form>
  )
}
