import styled, { css } from 'styled-components'
import { colors, spacing } from '../../theme'

export const Wrapper = styled.div`
  position: absolute;
  transform: ${({ scale }) => `scale(${scale / 100})`};
  transition: 0.25s background-color, 0.25 transform;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 1600px;
  overflow: hidden;
`

export const Shot = styled.div`
  position: relative;
  margin-bottom: 0;
  background-color: ${({ vibrant }) => vibrant};

  &::before {
    content: '';
    display: block;
    padding-block-start: 75%;
  }
`

export const Frame = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  margin: ${({ spacing }) => `${spacing}%`};
  margin-bottom: 0;

  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: ${colors.white};
  background-color: ${colors.gray[200]};
  overflow: hidden;

  ${({ radius, isExtended }) => css`
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
    ${isExtended &&
      css`
        margin-right: 30%;
      `};
  `}
`

export const Toolbar = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.gray[400]};
  background-color: ${colors.white};
  padding: ${spacing[10]};

  &::before {
    --size: ${spacing[16]};
    --gutter: ${spacing[8]};

    content: '';
    display: block;
    border-radius: 50%;
    box-shadow: calc(var(--size) + var(--gutter)) 0 0 #fc605c,
      calc((var(--size) + var(--gutter)) * 2) 0 0 #34c749;
    background-color: #fc605c;
    width: var(--size);
    height: var(--size);
  }
`

export const Image = styled.div`
  flex: 1 0 auto;
  background-image: ${({ file }) => `url(${file})`};
  background-position: top center;
  background-size: cover;
`

export const ExtendedImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: ${({ spacing }) => `0 ${spacing / 1.5}%`};
  box-shadow: 0 0 50px -12px rgba(0, 0, 0, 0.25);
  background-color: ${colors.gray[200]};
  background-image: ${({ file }) => `url(${file})`};
  background-position: center center;
  background-size: 100% auto;
  width: 40%;
`
