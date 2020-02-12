import React from 'react'
import * as S from './shot.styled'

const Shot = ({ file, spacing, radius, vibrant, scale }) => (
  <S.Wrapper scale={scale}>
    <S.Shot id="shot" file={file} vibrant={vibrant}>
      <S.Image file={file} spacing={spacing} radius={radius} />
    </S.Shot>
  </S.Wrapper>
)

export default Shot
