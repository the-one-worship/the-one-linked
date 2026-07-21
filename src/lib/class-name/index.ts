import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      radius: [
        'force-xs',
        'force-sm',
        'force-md',
        'force-lg',
        'force-xl',
        'force-2xl',
        'force-3xl',
        'force-4xl',
      ],
    },
    classGroups: {
      // theme.css — extend the built-in `z` (z-index) group with our --z-index-* tokens.
      z: [
        {
          z: [
            'below',
            'above',
            'sticky',
            'popover',
            'tooltip',
            'dialog',
            'header',
            'footer',
            'modal',
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
