import styled from 'styled-components'

const Slider = styled.input`
  appearance: none;
  height: 6px;
  border-radius: 6px;
  background-color: rgba(234, 76, 137, 0.15);
  width: 100%;
  max-width: 200px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #ea4c89;
    cursor: pointer;
  }
`

export default Slider
