import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  align?: 'space-evenly' | 'space-between'
  isOpen?: boolean
}

export const Wrapper = styled.menu<WrapperProps>`
  ${({ theme, align = 'space-between', isOpen }) => css`
    height: ${isOpen ? 'auto' : '100px'};
    color: ${isOpen ? theme.colors.black : theme.colors.white};
    background-color: ${theme.colors.mainBg};
    display: flex;
    justify-content: ${align};
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;
    border-bottom: 1px solid ${theme.colors.black};
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`
type MenuFullProps = {
  isOpen: boolean
}
export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease;

    > svg {
      color: ${isOpen ? theme.colors.black : theme.colors.white};
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
      transform: ${!isOpen ? 'translateY(3rem)' : 'translateY(0)'};
      transition: transform 0.3s ease;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 7rem;
    }
  `}
`

export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
type RegisterBoxProps = {
  align?: 'center' | 'space-between'
  direction?: 'column' | 'row'
  desktop?: boolean
}

const RegisterModifiers = {
  desktop: (theme: DefaultTheme) => css`
    padding: 0;
    > a {
      margin-right: ${theme.spacings.xxlarge};
    }

    > button {
      margin-left: ${theme.spacings.xxlarge};
    }
  `,
  mobile: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.small} ${theme.spacings.small};
  `
}

export const RegisterBox = styled.div<RegisterBoxProps>`
  ${({ theme, align = 'center', direction = 'column', desktop = false }) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      color: black;
      font-size: ${theme.font.sizes.xsmall};
    }
    ${desktop
      ? RegisterModifiers.desktop(theme)
      : RegisterModifiers.mobile(theme)}
  `}
`
export const LoginLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const MenuNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    margin: 10px;
  }
`
export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.secondary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
