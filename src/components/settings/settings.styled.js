import styled, { css } from 'styled-components'
import { colors, spacing } from '../../theme'

export const Settings = styled.aside`
  border-right: 1px solid ${colors.gray[200]};
  background-color: ${colors.white};
  padding: ${spacing[14]};
`

export const Controller = styled.div`
  margin-bottom: ${spacing[24]};
  ${({ inline }) =>
    inline &&
    css`
      display: flex;
      align-items: center;

      ${Label} {
        flex: 1 0 auto;
        margin: 0 ${spacing[10]} 0 0;
      }
    `}
`

export const Label = styled.label`
  display: block;
  margin: 0 0 ${spacing[10]};
  color: ${colors.gray[800]};
  font-weight: bold;
`
