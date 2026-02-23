import { z } from 'zod'

import { MEMBERS } from '@/constants/member'

export const schema = z.object({
  groups: z
    .number()
    .positive('at least 1')
    .max(MEMBERS.length, `max is ${MEMBERS.length}`),
})
// extracting the type
export type FormValues = z.infer<typeof schema>
