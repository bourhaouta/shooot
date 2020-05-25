import React, { useContext } from 'react'
import { SettingsContext } from '../../../store'

const Uploader = ({ id }) => {
  const { setFile } = useContext(SettingsContext)

  return (
    <div className='relative p-4 transition-colors duration-200 bg-gray-200 rounded-lg shadow-inner hover:bg-gray-300'>
      <label
        htmlFor={id}
        className='block py-10 text-center text-gray-700 border-2 border-gray-400 border-dashed'
      >
        <b>Choose an image</b> or drag it here
      </label>

      <input
        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        id={id}
        type='file'
        accept='image/png, image/jpeg'
        onChange={setFile}
      />
    </div>
  )
}

export default Uploader
