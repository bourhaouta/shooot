import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ scale }) => css`
    transform: scale(${scale});
  `};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 1600px;
`

export const Shot = styled.div`
  background-color: ${({ vibrant }) => vibrant};
  position: relative;
  transition: 0.25s background-color;
  overflow: hidden;

  &::before {
    display: block;
    padding-top: 75%;
    content: '';
  }
`

export const Image = styled.div`
  ${({ spacing, radius, file }) => css`
    margin: ${spacing}%;
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
    background-image: url(${file});
  `}
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-bottom: 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: #edf2f7;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`
