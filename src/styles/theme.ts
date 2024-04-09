import { keyframes } from 'styled-components'

export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  rotate: keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`,
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxsmall: '0.4rem',
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      extraBig: '6.0rem'
    }
  },
  colors: {
    primary: '#23A6F0',
    secondary: '#E74040',
    mainBg: '#17325B',
    greenIcon: '#ccffe1',
    redIcon: '#FFDCD1',
    blueIcon: '#A8DEEA',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#737373',
    darkGray: '#2E2F42',
    transparent: 'transparent'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '7.4rem'
  },
  shadows: {
    small: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    large: '0px 8px 8px rgba(0, 0, 0, 0.25)'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
