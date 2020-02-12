import html2canvas from 'html2canvas'
import * as Vibrant from 'node-vibrant'
import React, { useEffect, useState } from 'react'
import * as S from './App.styled'
import Actions from './components/actions/actions'
import Preview from './components/preview/preview'
import Settings from './components/settings/settings'

const App = () => {
  const [file, setFile] = useState(null)
  const [canvasURL, setCanvasURL] = useState(null)
  const [spacing, setSpacing] = useState(64)
  const [vibrant, setVibrant] = useState('#fff')
  const [radius, setRadius] = useState(16)

  const handleImageChange = e => setFile(URL.createObjectURL(e.target.files[0]))

  const handleSpacingChange = ({ target }) => setSpacing(target.value)

  const handleRadiusChange = ({ target }) => setRadius(target.value)

  useEffect(() => {
    file &&
      Vibrant.from(file)
        .getPalette()
        .then(({ LightMuted }) => setVibrant(LightMuted.hex))
  }, [file])

  const handleSave = () => {
    html2canvas(document.getElementById('shot'), {
      letterRendering: 1,
      allowTaint: true,
    }).then(canvas => {
      setCanvasURL(canvas.toDataURL())
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
        {canvasURL && <img src={canvasURL} alt="" />}
      </S.App>
    </React.Fragment>
  )
}

export default App
