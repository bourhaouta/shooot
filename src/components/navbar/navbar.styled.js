import styled from 'styled-components'
import { colors, spacing } from '../../theme'

export const Navbar = styled.nav`
  display: flex;
  grid-column: span 2;
  align-items: center;
  border-bottom: 1px solid ${colors.gray[200]};
  background-color: ${colors.white};
  padding: ${spacing[10]};
`

export const Brand = styled.span`
  margin-right: auto;
`
