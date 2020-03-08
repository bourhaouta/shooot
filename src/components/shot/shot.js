import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import * as S from './shot.styled'

const Shot = ({ file, vibrant, scale }) => {
  const { radius, spacing } = useContext(SettingsContext)

  return (
    <S.Wrapper scale={scale}>
      <S.Shot id='shot' file={file} vibrant={vibrant}>
        <S.Image file={file} spacing={spacing} radius={radius} />
      </S.Shot>
    </S.Wrapper>
  )
}

export default Shot
