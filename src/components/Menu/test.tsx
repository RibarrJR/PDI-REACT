import { fireEvent, screen } from '@testing-library/react'

import Menu from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  //selecionar nosso menu full
  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(screen.getByTestId('menu')).toBeInTheDocument()
    //verificar o menu se esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //clicar no botão abrir o menu e verificar se esta aberto
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //clicar no botão de fechar o menu e verificar se esta fechado
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should show login link and registry button when not authenticated ', () => {
    renderWithTheme(<Menu />)
    expect(screen.queryAllByText(/login/i)[0]).not.toBeUndefined()
    expect(screen.queryAllByText(/cadastrar-se/i)[0]).not.toBeUndefined()
  })
  it('should hidden login link and registry button when not authenticated ', () => {
    renderWithTheme(<Menu username="Jr" />)
    expect(screen.queryAllByText(/login/i)[0]).toBeUndefined()
    expect(screen.queryAllByText(/cadastrar-se/i)[0]).toBeUndefined()
  })
})
