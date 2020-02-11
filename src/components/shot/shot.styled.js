import styled, { css } from 'styled-components'

export const Shot = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ vibrant }) => vibrant};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    display: block;
    padding-top: 75%;
  }
`

export const Image = styled.div`
  background-color: #edf2f7;
  background-image: url(${({ file }) => file});
  ${({ spacing }) => css`
    width: ${100 - spacing * 2}%;
    margin: ${spacing}%;
  `}
  ${({ radius }) => css`
    border-top-right-radius: ${radius}%;
    border-top-left-radius: ${radius}%;
  `}
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`
