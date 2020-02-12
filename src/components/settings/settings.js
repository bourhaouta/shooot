import React from 'react'
import Slider from '../slider/slider'

const Settings = ({
  onImageChange,
  onSpacingChange,
  spacing,
  onRadiusChange,
  radius,
}) => {
  return (
    <div>
      <input type="file" onChange={onImageChange} />

      <Slider
        type="range"
        min="0"
        max="300"
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
    </div>
  )
}

export default Settings
