import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Button from '../button/button'
import * as S from './navbar.styled'

const Actions = ({ onSave }) => {
  const { file } = useContext(SettingsContext)

  return (
    <S.Navbar>
      <S.Brand href='/'>
        <img src={require('../../images/brand.svg')} alt='Dribbblor' />
      </S.Brand>

      <Button disabled={!file} onClick={onSave} icon='download'>
        Download
      </Button>
    </S.Navbar>
  )
}

export default Actions
