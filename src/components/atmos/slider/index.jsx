import React from 'react'

const Slider = ({ min, onChange, value }) => (
  <input
    className='slider'
    type='range'
    min={min}
    onChange={onChange}
    value={value}
  />
)

export default Slider
