import styled, { css } from 'styled-components'
import { Wrapper as WellcomeWrapper } from 'components/Wellcome/styles'
import { Wrapper as MainContentWrapper } from 'components/MainContent/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${WellcomeWrapper},${MainContentWrapper} {
      margin-bottom: ${theme.spacings.xlarge};
    }
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `}
`

export const ContentSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      padding: 18rem 0rem 0rem 12rem;
      clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
    `}
    ${media.lessThan('medium')`
      align-items: center;
      text-align: center;
      padding: 3rem 2rem 3rem 2rem;
    `}
  `}
`

export const WellcomeSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.xxxlarge};
    ${media.lessThan('medium')`
      padding: ${theme.spacings.small} ;
    `}
  `}
`

export const FooterSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.xxxlarge};
    ${media.lessThan('medium')`
      padding: ${theme.spacings.small} ;
    `}
  `}
`
