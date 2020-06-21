import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Toggle from '../atmos/toggle'
import Controller from '../controller'

const Image = () => {
  const { isCover, setIsCover, isRepeatY, setIsRepeatY } = useContext(
    SettingsContext,
  )

  return (
    <Controller icon='trio' label='Image' isInline>
      <div className='space-y-3'>
        <Toggle
          id='cover'
          label='Expand to cover window'
          onChange={() => {
            setIsCover(!isCover)
            isCover && setIsCover(false)
          }}
          checked={isCover}
        />
        <Toggle
          id='repeaty'
          label='Repeat image vertically'
          onChange={() => {
            setIsRepeatY(!isRepeatY)
            isRepeatY && setIsRepeatY(false)
          }}
          checked={isRepeatY}
        />
      </div>
    </Controller>
  )
}

export default Image
