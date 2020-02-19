import React from 'react'

const Swatcher = ({ onVibrantChange, vibrant }) => {
  return (
    <React.Fragment>
      <input
        type="color"
        onChange={onVibrantChange}
        value={vibrant}
        placeholder={vibrant}
      />
      <input type="text" onChange={onVibrantChange} value={vibrant} />
    </React.Fragment>
  )
}

export default Swatcher
