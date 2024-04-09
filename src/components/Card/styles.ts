/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { DefaultTheme, css } from 'styled-components'
import Media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.small};
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${Media.lessThan('medium')`
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      width:100%;

      p{
        max-width:none;
        text-align:center;
      }
    `}
  `}
`
export type WrapperProps = {
  theme: DefaultTheme
  color: 'greenIcon' | 'blueIcon' | 'redIcon'
}

export const WrapperImage = styled.div`
  ${({ theme, color }: WrapperProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius};
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    background-color: ${theme.colors[color!]};
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
  `}
`
export const Image = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    height: 40px;
    width: 40px;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 800;
  `}
`
export const Dash = styled.div`
  ${({ theme }) => css`
    content: '';
    border-bottom: 2px solid ${theme.colors.secondary};
    width: ${theme.spacings.small};
  `}
`
export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 400;
    max-width: ${theme.spacings.xxxlarge};
    text-align: left;
  `}
`
