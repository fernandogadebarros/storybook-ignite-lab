import { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
  const Tag = asChild ? Slot : 'h2'

  return (
    <Tag 
      className={clsx(`text-white-300 font-bold font-sans`, {
        'text-md': size === 'sm',
        'text-lg': size === 'md',
        'text-xl': size === 'lg',
      })}
      >
        {children}
    </Tag>
  )
}
