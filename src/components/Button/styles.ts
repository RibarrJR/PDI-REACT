/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'
import theme from 'styles/theme'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'color' | 'fullWidth'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: ${theme.spacings.large};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  transparentButton: (theme: DefaultTheme) => css`
    background: ${theme.colors.transparent};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    :hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `,
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.8rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, fullWidth, hasIcon }) => css`
    background: ${theme.colors[color!]};
    font-family: ${theme.font.family};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    border: 0;
    transition: all 0.3s ease;
    :hover {
      background: ${theme.colors.secondary};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${color === 'transparent' && wrapperModifiers.transparentButton(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon()}
  `}
`
