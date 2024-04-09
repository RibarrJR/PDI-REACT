import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { ArrowRightShort } from 'styled-icons/bootstrap'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4.0rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })
  it('should render the small size ', () => {
    renderWithTheme(<Button size="small">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      padding: '0.8rem 0.8rem',
      'font-size': '1.2rem'
    })
  })
  it('should render the large size ', () => {
    renderWithTheme(<Button size="large">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4.8rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })
  it('should render the fullwidth size ', () => {
    renderWithTheme(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4.0rem',
      width: '100%',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })
  it('should render the transparent button ', () => {
    renderWithTheme(
      <Button fullWidth color="transparent">
        Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4.0rem',
      background: 'transparent',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })
  it('should render an icon default type', () => {
    renderWithTheme(
      <Button
        fullWidth
        color="transparent"
        icon={<ArrowRightShort data-testid="icon" />}
      >
        Button
      </Button>
    )

    expect(screen.getByText(/Button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render an icon type in left side', () => {
    renderWithTheme(
      <Button
        fullWidth
        color="transparent"
        iconPosition="left"
        icon={<ArrowRightShort data-testid="icon" />}
      >
        Button
      </Button>
    )

    expect(screen.getByText(/Button/i)).toBeInTheDocument()

    expect(screen.getByTestId('icon').parentElement?.outerHTML).toMatch(
      /<\/svg><span>Button<\/span><\/button>/i
    )
  })
})
