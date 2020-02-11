import React from 'react'
import * as S from './shot.styled'

const Shot = ({ file, spacing, radius, vibrant }) => (
  <S.Shot vibrant={vibrant}>
    <S.Image file={file} spacing={spacing} radius={radius} />
  </S.Shot>
)

export default Shot
