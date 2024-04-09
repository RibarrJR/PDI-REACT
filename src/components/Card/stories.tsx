import { Story, Meta } from '@storybook/react'
import Card from '.'

import { PageIcon } from '../../../public/img/htmlcssjs'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story = () => (
  <Card
    icon={<PageIcon />}
    title="lorem ipsum dolor"
    subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit"
  />
)
