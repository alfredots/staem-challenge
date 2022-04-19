// styled.d.ts
import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      highlight: '#e20e8d'
      background: '#030518'
      white: '#eeeeee'
    }
    container: '100rem'
    sizing: {
      small: '1.5rem'
      medium: '3rem'
      large: '5rem'
    }
  }
}
