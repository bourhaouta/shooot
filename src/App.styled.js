import reset from 'minireset.css'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${reset}
`

export const App = styled.div`
  display: grid;
  grid-template-rows: 56px minmax(0, 1fr);
  grid-template-columns: 330px minmax(0, 1fr);
  background-color: #f7fafc;
  height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`
