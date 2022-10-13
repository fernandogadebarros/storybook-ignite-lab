import { ReactNode } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {

}

export function Checkbox({ }: CheckboxProps) {

  return (
    <CheckboxPrimitive.Root className="flex item-center justify-center w-6 h-6 p[2px] rounded bg-gray-900">
        <CheckboxPrimitive.Indicator asChild>
          <Check weight='bold' className="h-6 w-4 text-ciano" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}