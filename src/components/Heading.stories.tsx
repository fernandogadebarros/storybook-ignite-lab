import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

// Config Global para o componente
export default { 
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
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
} as Meta<HeadingProps>

// Exportar ao menos uma variant
export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md'
  },
  
}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

// Slot Radix, repassa todas as propriedades para o compoente
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1 Tag</h1>
    )
  },

  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}