import { Story, Meta } from '@storybook/react'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Button'
}
export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Button',
  icon: <ArrowRightShort />
}
