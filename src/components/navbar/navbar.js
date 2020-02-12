import React from 'react'
import Button from '../button/button'
import * as S from './navbar.styled'

const Actions = ({ onSave }) => {
  return (
    <S.Navbar>
      <S.Brand>Dribbblor</S.Brand>
      <Button onClick={onSave} type="button">
        Generate
      </Button>
    </S.Navbar>
  )
}

export default Actions
