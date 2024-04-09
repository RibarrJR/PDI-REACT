import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.grid.gutter};

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  `}
`
export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacings.medium};
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-gap: ${({ theme }) => theme.grid.gutter};
  flex-direction: column;
  align-items: center;
  position: relative;

  > :nth-child(2) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  ${media.lessThan('huge')`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    > :nth-child(2) {
    position: relative;
  }

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    > :nth-child(2) {
    position: relative;
  }
  `}


  `}
`

export const Dash = styled.div`
  ${({ theme }) => css`
    content: '';
    border-bottom: 7px solid ${theme.colors.secondary};
    width: ${theme.spacings.large};
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-weight: bold;
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.primary};
    svg {
      width: 20px;
      height: 20px;
    }
  `}
`
