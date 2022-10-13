import { InputHTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

// PATTERN DE COMPOSIÇÃO

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex item-center gap-3 py-4 px-3 rounded bg-gray-900  w-full focus-within:ring-2 ring-ciano">
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-600">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'


// Esse componente recebe todas as propriedades do HTML Tradicional
export interface TextInputWrapperProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputWrapper(props: TextInputWrapperProps) {
  return (
    <input 
      className="bg-transparent flex-1 outline-none text-gray-600 text-xs placeholder:text-gray-600"
      {...props}
    />
  )
}

TextInputWrapper.displayName = 'TextInput.Wrapper'


export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputWrapper,
  Icon: TextInputIcon
}
