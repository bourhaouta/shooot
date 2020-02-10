import React from 'react'
import * as S from './shot.styled'

const Shot = ({ file }) => (
  <S.Shot>
    shot
    <S.Image backgroundImage={file} />
  </S.Shot>
)

export default Shot
