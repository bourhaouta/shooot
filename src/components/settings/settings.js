import React from 'react'
import Slider from '../slider/slider'
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
    <input type="file" onChange={onImageChange} />

    <input type="text" onChange={onVibrantChange} value={vibrant} />

    <Slider
      type="range"
      min="0"
      max="25"
      step=".5"
      onChange={onSpacingChange}
      value={spacing}
    />

    <Slider
      type="range"
      min="0"
      max="300"
      step=".5"
      onChange={onRadiusChange}
      value={radius}
    />
  </S.Settings>
)

export default Settings
