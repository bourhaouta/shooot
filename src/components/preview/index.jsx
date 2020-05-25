import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../store'
import Slider from '../atmos/slider'
import Shot from '../shot'

const Preview = () => {
  const [scale, setScale] = useState(45)

  const { file, vibrant } = useContext(SettingsContext)

  const shotProps = { className: 'absolute', file, vibrant, scale }

  return (
    <div className='relative flex items-center justify-center overflow-auto'>
      <Shot {...shotProps} />

      <div className='fixed bottom-0 right-0 m-4'>
        <Slider
          min='10'
          onChange={({ target: { value } }) => setScale(value)}
          value={scale}
        />
      </div>
    </div>
  )
}

export default Preview
