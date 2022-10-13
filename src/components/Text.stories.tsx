import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

// Config Global para o componente
export default { 
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>

// Exportar ao menos uma variant
export const Default: StoryObj<TextProps> = {
  args: {
    size: 'md'
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

// Slot Radix, repassa todas as propriedades para o compoente
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  },

  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}