import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Toggle from '../atmos/toggle'
import Controller from '../controller'
import Swatcher from '../swatcher'

const Background = () => {
  const { isBlended, isBlurred, setIsBlended, setIsBlurred } = useContext(
    SettingsContext,
  )

  return (
    <Controller icon='brush' label='Background' isInline>
      <div className='space-y-3'>
        <Swatcher />

        <hr className='w-2/3 mx-auto opacity-50' />

        <Toggle
          id='blur'
          label='Blur the background image'
          onChange={() => {
            setIsBlurred(!isBlurred)
            isBlended && setIsBlended(false)
          }}
          checked={isBlurred}
        />

        <Toggle
          id='blend'
          label='Blend the background color'
          onChange={() => {
            setIsBlended(!isBlended)
            !isBlended && setIsBlurred(true)
          }}
          checked={isBlended}
        />
      </div>
    </Controller>
  )
}

export default Background
