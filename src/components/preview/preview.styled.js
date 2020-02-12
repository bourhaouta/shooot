import styled from 'styled-components'
import Slider from '../slider/slider'

export const Preview = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Scale = styled(Slider)`
  position: absolute;
  right: 24px;
  bottom: 24px;
`
