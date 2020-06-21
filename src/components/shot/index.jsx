import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Template from './templates'

const Shot = ({ scale }) => {
  const {
    file,
    hasToolbar,
    isBlended,
    isBlurred,
    radius,
    spacing,
    template,
    vibrant,
    isCover,
    isRepeatY,
  } = useContext(SettingsContext)

  const templateProps = {
    width: '1600px',
    file,
    hasToolbar,
    isBlended,
    isBlurred,
    name: template,
    radius,
    scale,
    spacing,
    vibrant,
    isCover,
    isRepeatY,
  }

  return <Template id='frame' {...templateProps} />
}

export default Shot
