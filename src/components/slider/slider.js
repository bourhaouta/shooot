import styled from 'styled-components'
import { colors } from '../../theme'

const Slider = styled.input`
  appearance: none;
  height: 6px;
  border-radius: 6px;
  background-color: ${colors.primary[100]};
  width: 100%;
  max-width: 200px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid ${colors.primary[500]};
    cursor: pointer;
  }
`

export default Slider
