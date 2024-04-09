/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};
    display: flex;
    width: ${theme.spacings.xlarge};
    ${!!size && wrapperModifiers[size]}
  `}
`

const wrapperModifiers = {
  small: () => css`
    width: 8rem;
  `,
  normal: () => css`
    width: 11rem;
  `,
  large: () => css`
    width: 20rem;
  `
}

export const SvgLogo = styled.svg`
  ${({ theme }) => css`
    animation: ${theme.rotate} 4s linear infinite;
  `}
`
