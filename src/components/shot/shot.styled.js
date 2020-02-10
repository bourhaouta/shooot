import styled from 'styled-components'

export const Shot = styled.div`
  position: relative;
  overflow: hidden;
  background-color: red;

  &::before {
    content: '';
    display: block;
    padding-top: 75%;
  }
`

export const Image = styled.div`
  position: relative;
  overflow: hidden;
`
