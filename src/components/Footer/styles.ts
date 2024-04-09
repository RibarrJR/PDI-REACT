import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.footer``
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns:repeat(4,1fr)
    `}
  `}
`
export const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.grid.gutter};
    h1 {
      font-size: ${theme.font.sizes.medium};
    }
    span {
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.light};
    }
  `}
`

export const IconsBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};

    svg {
      width: 24px;
      height: 24px;
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    h1 {
      font-size: ${theme.font.sizes.medium};
    }
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.light};
    }
    ${media.greaterThan('medium')`
      justify-content:start;
      align-items:flex-start;
    `}
  `}
`
export const Tecnologies = styled.div``
export const Responsibles = styled.div``
