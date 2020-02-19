import React from 'react'
import Slider from '../slider/slider'
import Swatcher from '../swatcher/swatcher'
import Uploader from '../uploader/uploader'
import * as S from './settings.styled'

const Settings = ({
  onImageChange,
  onSpacingChange,
  spacing,
  onRadiusChange,
  radius,
  onVibrantChange,
  vibrant,
}) => (
  <S.Settings>
    <S.Controller>
      <S.Label htmlFor="uploader">Upload your image</S.Label>
      <Uploader id="uploader" onImageChange={onImageChange} />
    </S.Controller>

    <S.Controller inline>
      <S.Label>Background</S.Label>
      <Swatcher onVibrantChange={onVibrantChange} vibrant={vibrant} />
    </S.Controller>

    <S.Controller inline>
      <S.Label>Spacing</S.Label>
      <Slider
        type="range"
        min="0"
        max="25"
        step=".5"
        onChange={onSpacingChange}
        value={spacing}
      />
    </S.Controller>

    <S.Controller inline>
      <S.Label>Radius</S.Label>
      <Slider
        type="range"
        min="0"
        max="300"
        step=".5"
        onChange={onRadiusChange}
        value={radius}
      />
    </S.Controller>
  </S.Settings>
)

export default Settings
