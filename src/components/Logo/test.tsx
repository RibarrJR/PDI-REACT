import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(
        /Menu com o logo do react vermelho com um coração no interior girando/i
      ).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="primary" />)
    expect(
      screen.getByLabelText(
        /Menu com o logo do react vermelho com um coração no interior girando/i
      ).parentElement
    ).toHaveStyle({
      color: '#23A6F0'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(
        /Menu com o logo do react vermelho com um coração no interior girando/i
      ).parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })
  it('should render a small logo when size is default', () => {
    renderWithTheme(<Logo size="small" />)
    expect(
      screen.getByLabelText(
        /Menu com o logo do react vermelho com um coração no interior girando/i
      ).parentElement
    ).toHaveStyle({
      width: '8rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(
        /Menu com o logo do react vermelho com um coração no interior girando/i
      ).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })
})
