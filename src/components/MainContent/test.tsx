import MainContent from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<MainContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MainContent />)
  })
})
