import React from 'react'
import { colors } from '../../theme'
import Icon from '../icon/icon'
import * as S from './button.styled'

export const Button = ({ icon, onClick, children, type = 'button' }) => (
  <S.Button type={type} onClick={onClick}>
    {icon && (
      <S.ButtonIcon>
        <Icon name={icon} color={colors.white} />
      </S.ButtonIcon>
    )}

    <span>{children}</span>
  </S.Button>
)

export default Button
