import React from 'react'

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

      <input
        type="range"
        min="0"
        max="20"
        step=".5"
        onChange={onSpacingChange}
        value={spacing}
      />

      <input
        type="range"
        min="0"
        max="50"
        step=".5"
        onChange={onRadiusChange}
        value={radius}
      />
    </div>
  )
}

export default Settings
