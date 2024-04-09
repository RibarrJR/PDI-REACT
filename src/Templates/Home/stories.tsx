import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: '',
  description: 'Aqui você vai desenvolver um site do zero para aprender react'
}

export const Default: Story = (args) => <Main {...args} />
