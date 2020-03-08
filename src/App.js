import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import * as Vibrant from 'node-vibrant'
import React, { useEffect, useState } from 'react'
import * as S from './App.styled'
import Navbar from './components/navbar/navbar'
import Preview from './components/preview/preview'
import Settings from './components/settings/settings'
import { colors } from './theme'

const saveDomToImage = ({ elId, blobName }) => {
  domtoimage
    .toBlob(document.getElementById(elId))
    .then(blob => saveAs(blob, blobName))
    .catch(error => console.error('oops, something went wrong!', error))
}

const App = () => {
  const [file, setFile] = useState(null)
  const [vibrant, setVibrant] = useState(colors.white)

  const handleImageChange = e => setFile(URL.createObjectURL(e.target.files[0]))

  const handleVibrantChange = ({ target }) => setVibrant(target.value)

  useEffect(() => {
    file &&
      Vibrant.from(file)
        .getPalette()
        .then(({ LightMuted }) => setVibrant(LightMuted.hex))
  }, [file])

  const handleSave = () => {
    saveDomToImage('shot', 'my-node.png')
  }

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.App>
        <Navbar onSave={handleSave} />

        <Settings
          onImageChange={handleImageChange}
          onVibrantChange={handleVibrantChange}
          vibrant={vibrant}
        />

        <Preview file={file} vibrant={vibrant} />
      </S.App>
    </React.Fragment>
  )
}

export default App
