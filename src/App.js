import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import * as Vibrant from 'node-vibrant'
import React, { useEffect, useState } from 'react'
import * as S from './App.styled'
import Navbar from './components/navbar/navbar'
import Preview from './components/preview/preview'
import Settings from './components/settings/settings'

const App = () => {
  const [file, setFile] = useState(null)
  const [spacing, setSpacing] = useState(10)
  const [vibrant, setVibrant] = useState('#fff')
  const [radius, setRadius] = useState(24)

  const handleImageChange = e => setFile(URL.createObjectURL(e.target.files[0]))

  const handleSpacingChange = ({ target }) => setSpacing(target.value)

  const handleRadiusChange = ({ target }) => setRadius(target.value)

  const handleVibrantChange = ({ target }) => setVibrant(target.value)

  useEffect(() => {
    file &&
      Vibrant.from(file)
        .getPalette()
        .then(({ LightMuted }) => setVibrant(LightMuted.hex))
  }, [file])

  const handleSave = () => {
    domtoimage
      .toBlob(document.getElementById('shot'))
      .then(blob => saveAs(blob, 'my-node.png'))
      .catch(error => console.error('oops, something went wrong!', error))
  }

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.App>
        <Navbar onSave={handleSave} />

        <Settings
          onImageChange={handleImageChange}
          onSpacingChange={handleSpacingChange}
          spacing={spacing}
          onRadiusChange={handleRadiusChange}
          radius={radius}
          onVibrantChange={handleVibrantChange}
          vibrant={vibrant}
        />

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
