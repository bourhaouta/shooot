import React from 'react'
import * as S from './uploader.styled'

const Uploader = ({ id, onImageChange }) => (
  <S.Uploader>
    <S.Label htmlFor={id}>
      <b>Choose an image</b> or drag it here
    </S.Label>
    <S.Input
      id={id}
      type="file"
      accept="image/png, image/jpeg"
      onChange={onImageChange}
    />
  </S.Uploader>
)

export default Uploader
