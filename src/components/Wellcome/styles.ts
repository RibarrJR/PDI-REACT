import styled, { css } from 'styled-components'
import Media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: ${theme.grid.gutter};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    ${Media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    padding: 0 ${theme.font.sizes.xxlarge};
  `}
`
export const WellcomeText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};

    ${Media.lessThan('medium')`
    font-size: 0.8rem;
  `}
  `}
`
export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};

    ${Media.lessThan('medium')`
      font-size: 0.8rem;
    `}
  `}
`
export const BoxButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    Button {
      margin: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
    }

    ${Media.lessThan('medium')`
      flex-direction: column;
      align-items: center;

      Button{
        margin: ${theme.spacings.xxsmall} 0;
      }
      `}
  `}
`
export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
