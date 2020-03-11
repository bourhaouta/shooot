import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import * as S from './uploader.styled'

const Uploader = ({ id }) => {
  const { setFile } = useContext(SettingsContext)

  return (
    <S.Uploader>
      <S.Label htmlFor={id}>
        <b>Choose an image</b> or drag it here
      </S.Label>
      <S.Input
        id={id}
        type='file'
        accept='image/png, image/jpeg'
        onChange={setFile}
      />
    </S.Uploader>
  )
}

export default Uploader
