import cx from 'classnames'
import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Icon from '../atmos/icon'

const Swatcher = () => {
  const { vibrant, setVibrant, palette } = useContext(SettingsContext)
  const setVibrantValue = (e) => setVibrant(e.target.value)

  return (
    <div className='relative'>
      <label
        htmlFor='picker'
        className='absolute inset-y-0 right-0 flex items-center justify-center w-8 h-8 transition-colors duration-200 border border-transparent rounded-r cursor-pointer hover:bg-gray-300'
      >
        <Icon name='eyedrop' />

        <input
          id='picker'
          className='absolute inset-0 w-full h-full opacity-0 pointer-events-none'
          type='color'
          onChange={(e) => setVibrantValue(e)}
          value={vibrant}
          placeholder={vibrant}
        />
      </label>

      <input
        className='w-full h-8 pl-2 uppercase border border-gray-300 rounded focus:border-gray-400'
        type='text'
        onChange={(e) => setVibrantValue(e)}
        value={vibrant}
      />

      <div className='flex items-center mt-2 space-x-2'>
        <span className='text-xs'>Colors:</span>
        <ul className='flex items-center space-x-2'>
          {palette.map(({ hex }) => (
            <li
              key={hex}
              className={cx(
                'w-4 h-4 transition-colors duration-200 border-2 rounded-full cursor-pointer',
                hex === vibrant ? 'border-primary-500' : 'border-transparent',
              )}
              style={{ backgroundColor: hex }}
              onClick={() => setVibrant(hex)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Swatcher
