import Card from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { PageIcon } from '../../../public/img/htmlcssjs'

describe('<Card />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Card title={''} icon={<PageIcon />} subtitle={''} />)
  })
})
