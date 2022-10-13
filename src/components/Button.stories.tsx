import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

// Config Global para o componente
export default { 
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
} as Meta<ButtonProps>

// Exportar ao menos uma variant
export const Default: StoryObj<ButtonProps> = {
  args: {},
}
