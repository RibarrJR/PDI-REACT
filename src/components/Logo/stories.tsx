import { Story, Meta } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story = () => <Logo />
export const Primary: Story = () => <Logo color="primary" />
export const PrimaryLarge: Story = () => <Logo color="primary" size="large" />

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
Primary.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
PrimaryLarge.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
