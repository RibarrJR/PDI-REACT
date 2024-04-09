import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* montserrat-300 - latin */
@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/montserrat-v26-latin-300.woff2') format('woff2');
}
/* montserrat-regular - latin */
@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/montserrat-v26-latin-regular.woff2') format('woff2');
}
/* montserrat-600 - latin */
@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/montserrat-v26-latin-600.woff2') format('woff2');
}
/* montserrat-700 - latin */
@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/montserrat-v26-latin-700.woff2') format('woff2');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osz-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
    }
  `}

`

export default GlobalStyles
