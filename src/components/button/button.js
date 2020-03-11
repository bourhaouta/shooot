import React from 'react'
import { colors } from '../../theme'
import Icon from '../icon/icon'
import * as S from './button.styled'

export const Button = ({
  type = 'button',
  children,
  disabled,
  icon,
  onClick,
}) => (
  <S.Button type={type} disabled={disabled} onClick={onClick}>
    {icon && (
      <S.Icon>
        <Icon name={icon} color={colors.white} />
      </S.Icon>
    )}

    <span>{children}</span>
  </S.Button>
)

export default Button
