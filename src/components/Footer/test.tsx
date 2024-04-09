import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Footer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Framework/i })
    ).toBeInTheDocument()
  })
})
