import React, { createContext, useState } from 'react'
import * as TEMPLATES from '../components/shot/templates/constants'

export const SettingsContext = createContext(null)

export default ({ children }) => {
  const [template, setTemplate] = useState(TEMPLATES.STANDARD)
  const [file, setFile] = useState(null)
  const [vibrant, setVibrant] = useState('#e2e8f0')
  const [palette, setPalette] = useState([{ hex: vibrant }])

  const [spacing, setSpacing] = useState({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  })
  const setAllSpacing = (value) =>
    setSpacing({
      top: value,
      right: value,
      bottom: value,
      left: value,
    })

  const [radius, setRadius] = useState({
    'top-left': 10,
    'top-right': 10,
    'bottom-right': 10,
    'bottom-left': 10,
  })

  const setAllRadius = (value) =>
    setRadius({
      'top-left': value,
      'top-right': value,
      'bottom-right': value,
      'bottom-left': value,
    })

  const [hasToolbar, setHasToolbar] = useState(true)
  const [isBlurred, setIsBlurred] = useState(false)
  const [settingsVisibility, setSettingsVisibility] = useState(false)
  const [isBlended, setIsBlended] = useState(false)

  const settings = {
    settingsVisibility,
    setSettingsVisibility,

    template,
    setTemplate,

    file,
    setFile: (e) => setFile(URL.createObjectURL(e.target.files[0])),

    spacing,
    setSpacing,
    setAllSpacing,

    vibrant,
    setVibrant,

    palette,
    setPalette,

    radius,
    setRadius,
    setAllRadius,

    isBlurred,
    setIsBlurred,

    isBlended,
    setIsBlended,

    hasToolbar,
    setHasToolbar,
  }

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}
