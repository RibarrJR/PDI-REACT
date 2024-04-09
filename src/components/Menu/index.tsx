import Logo from 'components/Logo'
import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/remix-line/Close'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from '../MediaMatch'
export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuList = [
    <S.MenuLink key={1} href="#">
      Home
    </S.MenuLink>,
    <S.MenuLink key={2} href="#">
      Tópicos
    </S.MenuLink>,
    <S.MenuLink key={3} href="#">
      Atividade
    </S.MenuLink>,
    <S.MenuLink key={4} href="#">
      Contato
    </S.MenuLink>
  ]
  return (
    <>
      <MediaMatch lessThan="medium">
        <S.Wrapper isOpen={isOpen} data-testid="menu">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
          <S.LogoWrapper>
            <Logo size="small" color="secondary"></Logo>
          </S.LogoWrapper>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />

            <S.MenuNav>
              {menuList.map((element) => {
                return element
              })}
            </S.MenuNav>
            {!username && (
              <S.RegisterBox>
                <S.LoginLink href="#">Login</S.LoginLink>
                <span>or</span>
                <Button fullWidth size="large" color="primary">
                  Cadastrar-se
                </Button>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </S.Wrapper>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.Wrapper align="space-evenly">
          <Logo size="normal" color="secondary"></Logo>

          <S.MenuNav>
            {menuList.map((element) => {
              return element
            })}
          </S.MenuNav>
          {!username && (
            <S.RegisterBox align="center" desktop direction="row">
              <S.LoginLink href="#">Login</S.LoginLink>
              <Button fullWidth size="medium" color="primary">
                Cadastrar-se
              </Button>
            </S.RegisterBox>
          )}
        </S.Wrapper>
      </MediaMatch>
    </>
  )
}

export default Menu
