import styled, { css } from 'styled-components'
import { colors, radius, spacing } from '../../theme'

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: ${radius.default};
  background-color: ${colors.primary[500]};
  cursor: pointer;
  padding: 0 ${spacing[20]};
  height: ${spacing[40]};
  color: ${colors.white};
  font-size: inherit;
  line-height: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.gray[200]};
      color: ${colors.gray[600]};
      cursor: not-allowed;

      ${Icon} {
        path {
          fill: ${colors.gray[600]};
        }
      }
    `}

  &:hover {
    opacity: 0.9;
  }
`

export const Icon = styled.i`
  margin-right: ${spacing[12]};
  margin-left: -${spacing[4]};
`
