import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import * as S from './shot.styled'

const Shot = ({ file, vibrant, scale }) => {
  const { radius, spacing, isToolbar, isExtended } = useContext(SettingsContext)

  return (
    <S.Wrapper scale={scale}>
      <S.Shot id='shot' vibrant={vibrant}>
        <S.Frame spacing={spacing} radius={radius} isExtended={isExtended}>
          {isToolbar && <S.Toolbar />}
          <S.Image file={file} />
        </S.Frame>

        {isExtended && <S.ExtendedImage file={file} spacing={spacing} />}
      </S.Shot>
    </S.Wrapper>
  )
}

export default Shot
