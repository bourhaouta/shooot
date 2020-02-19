import styled from 'styled-components'
import { colors, radius, spacing } from '../../theme'

export const Uploader = styled.div`
  position: relative;
  border-radius: ${radius.default};
  background-color: ${colors.gray[200]};
  padding: ${spacing[12]};
`

export const Label = styled.label`
  display: block;
  border: 2px dashed ${colors.gray[500]};
  border-radius: inherit;
  cursor: pointer;
  padding: ${spacing[48]} 0;
  width: 100%;
  text-align: center;
  color: ${colors.gray[800]};
`

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
`
