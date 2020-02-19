import reset from 'minireset.css'
import styled, { createGlobalStyle } from 'styled-components'
import { colors, fontSize } from './theme'

export const GlobalStyle = createGlobalStyle`
  ${reset}
`

export const App = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  grid-template-columns: 330px minmax(0, 1fr);
  background-color: ${colors.gray[100]};
  height: 100vh;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', SimSun, sans-serif;
  font-size: ${fontSize.base};
`
