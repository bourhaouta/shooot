import React, { createContext, useState } from 'react'
import { colors } from '../theme'

export const SettingsContext = createContext(null)

export default ({ children }) => {
  const [file, setFile] = useState(null)
  const [spacing, setSpacing] = useState(10)
  const [vibrant, setVibrant] = useState(colors.gray[100])
  const [palette, setPalette] = useState([])
  const [radius, setRadius] = useState(8)
  const [isToolbar, setIsToolbar] = useState(true)
  const [isExtended, setIsExtended] = useState(true)

  const settings = {
    file,
    setFile: e => setFile(URL.createObjectURL(e.target.files[0])),

    spacing,
    setSpacing,

    vibrant,
    setVibrant,

    palette,
    setPalette,

    radius,
    setRadius,

    isToolbar,
    setIsToolbar,

    isExtended,
    setIsExtended,
  }

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}
