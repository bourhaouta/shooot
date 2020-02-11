import styled from 'styled-components'

export const Preview = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Scale = styled.input`
  position: absolute;
  right: 24px;
  bottom: 24px;

  /* */
  appearance: none;
  height: 10px;
  border-radius: 6px;
  background-color: rgba(234, 76, 137, 0.15);

  &::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #ea4c89;
    cursor: pointer;
  }
`
