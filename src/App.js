import React, { useState, useEffect } from 'react'
import * as Vibrant from 'node-vibrant'
import html2canvas from 'html2canvas'
import * as S from './App.styled'
import Settings from './components/settings/settings'
import Actions from './components/actions/actions'
import Preview from './components/preview/preview'

const App = () => {
  const [file, setFile] = useState(null)
  const [spacing, setSpacing] = useState(2)
  const [vibrant, setVibrant] = useState('#fff')
  const [radius, setRadius] = useState(5)

  const handleImageChange = e => setFile(URL.createObjectURL(e.target.files[0]))

  const handleSpacingChange = ({ target }) => setSpacing(target.value)

  const handleRadiusChange = ({ target }) => setRadius(target.value)

  useEffect(() => {
    file &&
      Vibrant.from(file)
        .getPalette()
        .then(({ Vibrant }) => setVibrant(Vibrant.hex))
  }, [file])

  const handleSave = () => {
    html2canvas(document.getElementById('capture'), {
      letterRendering: 1,
      allowTaint: true,
    }).then(canvas => {
      document.body.appendChild(canvas)
    })
  }

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.App>
        <Settings
          onImageChange={handleImageChange}
          onSpacingChange={handleSpacingChange}
          spacing={spacing}
          onRadiusChange={handleRadiusChange}
          radius={radius}
        />
        <Actions onSave={handleSave} />
        <Preview
          file={file}
          spacing={spacing}
          radius={radius}
          vibrant={vibrant}
        />
      </S.App>
    </React.Fragment>
  )
}

export default App
