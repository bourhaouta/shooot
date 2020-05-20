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

export const Brand = styled.a`
  display: inline-flex;
  transition: 0.25s opacity;
  margin-right: auto;
  height: ${spacing[32]};

  img {
    display: inline-block;
    width: auto;
    height: 100%;
  }

  &:hover {
    opacity: 0.75;
  }
`
