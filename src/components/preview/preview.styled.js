import styled from 'styled-components'
import Slider from '../slider/slider'

export const Preview = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: auto;
`

export const Scale = styled(Slider)`
  position: fixed;
  right: 24px;
  bottom: 24px;
`
