import styled, { css } from 'styled-components'
import { colors, radius, spacing } from '../../theme'

export const Swatcher = styled.div`
  position: relative;

  > input {
    border: 1px solid ${colors.gray[300]};
    border-radius: ${radius.default};
    padding: 0 ${spacing[32]} 0 ${spacing[12]};
    width: 100%;
    height: ${spacing[32]};
    text-transform: uppercase;

    :focus {
      border-color: ${colors.gray[400]};
    }
  }
`

export const Picker = styled.div`
  label {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    width: ${spacing[32]};
    height: ${spacing[32]};
    cursor: pointer;
    border-radius: 0 ${radius.default} ${radius.default} 0;

    :hover {
      background-color: ${colors.gray[300]};
    }
  }

  input {
    display: none;
  }
`

export const Palette = styled.ul`
  display: flex;
  margin-top: ${spacing[8]};
`

export const PaletteItem = styled.li`
  margin-right: ${spacing[8]};
  border-radius: ${radius.full};
  box-shadow: inset 0 0 0 1px rgba(${colors.white}, 0.5);
  background-color: ${({ color }) => color};
  cursor: pointer;
  width: ${spacing[20]};
  height: ${spacing[20]};
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 2px solid ${colors.primary[500]};
    `};
`
