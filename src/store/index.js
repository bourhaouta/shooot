import React, { createContext, useState } from 'react'
import { colors } from '../theme'

export const SettingsContext = createContext(null)

export default ({ children }) => {
  const [file, setFile] = useState(null)
  const [spacing, setSpacing] = useState(10)
  const [vibrant, setVibrant] = useState(colors.white)
  const [palette, setPalette] = useState([])
  const [radius, setRadius] = useState(24)

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
  }

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}
