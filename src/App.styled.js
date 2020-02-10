import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import reset from 'minireset.css'

export const GlobalStyle = createGlobalStyle`
  ${reset}
`

export const App = styled.div`
  min-height: 100vh;
  background-color: #eee;
`
