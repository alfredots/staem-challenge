import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    highlight: '#e20e8d',
    background: '#030518',
    white: '#eeeeee'
  },
  container: '100rem',
  sizing: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem'
  }
} as const
