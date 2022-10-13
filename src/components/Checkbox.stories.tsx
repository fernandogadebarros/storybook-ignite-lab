import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

// Config Global para o componente
export default { 
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  // Mostra elementos a mais
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

// Exportar ao menos uma variant
export const Default: StoryObj<CheckboxProps> = {
  args: {},
}
