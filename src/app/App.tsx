import {Main} from '../pages'
import {ThemeProvider, createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
body {
  font-family: Arial, sans-serif;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
}
`
const theme = {
  colors: {
    primary: '#072659',
    secondary: '#657A9D',
  }
}

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Main />
    </ThemeProvider>
  )
}
