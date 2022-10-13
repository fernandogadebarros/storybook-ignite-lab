import { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Tag = asChild ? Slot : 'button'

  return (
    <Tag 
      className={clsx(
        `py-4 px-3 bg-ciano rounded font-semibold text-black text-sm w-full transition-colors hover:bg-acqua focus:ring-2 ring-white-300`, 
        {}
      )}
      >
        {children}
    </Tag>
  )
}
