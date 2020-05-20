import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Slider from '../slider/slider'
import Swatcher from '../swatcher/swatcher'
import Uploader from '../uploader/uploader'
import * as S from './settings.styled'

const Settings = () => {
  const {
    spacing,
    setSpacing,
    radius,
    setRadius,
    isToolbar,
    setIsToolbar,
    isExtended,
    setIsExtended,
  } = useContext(SettingsContext)

  return (
    <S.Settings>
      <S.Controller>
        <S.Label htmlFor='uploader'>Upload your image</S.Label>
        <Uploader id='uploader' />
      </S.Controller>

      <S.Controller inline>
        <S.Label htmlFor='toolbar'>Toolbar</S.Label>

        <input
          id='toolbar'
          type='checkbox'
          onChange={() => setIsToolbar(!isToolbar)}
          checked={isToolbar}
        />
      </S.Controller>

      <S.Controller inline>
        <S.Label htmlFor='extended'>Extended</S.Label>

        <input
          id='extended'
          type='checkbox'
          onChange={() => setIsExtended(!isExtended)}
          checked={isExtended}
        />
      </S.Controller>

      <S.Controller inline>
        <S.Label>Background</S.Label>
        <Swatcher />
      </S.Controller>

      <S.Controller inline>
        <S.Label>Spacing</S.Label>
        <Slider
          type='range'
          max='25'
          onChange={({ target }) => setSpacing(target.value)}
          value={spacing}
        />
      </S.Controller>

      <S.Controller inline>
        <S.Label>Radius</S.Label>
        <Slider
          type='range'
          max='100'
          onChange={({ target }) => setRadius(target.value)}
          value={radius}
        />
      </S.Controller>
    </S.Settings>
  )
}

export default Settings
