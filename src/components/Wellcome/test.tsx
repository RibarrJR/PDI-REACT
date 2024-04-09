import { screen } from '@testing-library/react'

import Wellcome from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Wellcome />', () => {
  it('should render the wellcome in the page with color blue', () => {
    renderWithTheme(<Wellcome />)

    expect(screen.getByText(/Bem vindo/i)).toBeInTheDocument()
    expect(screen.getByText(/Bem vindo/i)).toHaveStyle({ color: '#23A6F0' })
  })

  it('should render the title in the page with big size', () => {
    renderWithTheme(<Wellcome />)

    expect(screen.getByText(/Projeto Simples em React/i)).toBeInTheDocument()
    expect(screen.getByText(/Projeto Simples em React/i)).toHaveStyleRule(
      'font-size',
      '2.8rem'
    )
  })

  it('should render the subtitle in the page with color gray', () => {
    renderWithTheme(<Wellcome />)

    expect(
      screen.getByText(
        /Vamos Começar a aprender React com este site por favor divirta-se no processo/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Vamos Começar a aprender React com este site por favor divirta-se no processo/i
      )
    ).toHaveStyleRule('color', '#FAFAFA')
  })

  it('should render the buttons in the page', () => {
    renderWithTheme(<Wellcome />)

    expect(
      screen.getAllByText(/Faça o teste de nivelmaneto/i)[0]
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Quer aprender mais ?/i)[0]).toBeInTheDocument()
  })
})
