import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import * as Vibrant from 'node-vibrant'
import React, { useContext, useEffect } from 'react'
import * as S from './App.styled'
import Navbar from './components/navbar/navbar'
import Preview from './components/preview/preview'
import Settings from './components/settings/settings'
import { SettingsContext } from './store'

const saveDomToImage = (elId, blobName) => {
  domtoimage
    .toBlob(document.getElementById(elId))
    .then(blob => saveAs(blob, blobName))
    .catch(error => console.error('oops, something went wrong!', error))
}

const App = () => {
  const handleVibrantChange = ({ target }) => setVibrant(target.value)

  const { file, vibrant, setVibrant, setPalette } = useContext(SettingsContext)

  useEffect(() => {
    file &&
      Vibrant.from(file)
        .getPalette()
        .then(palette => {
          setVibrant(palette.LightMuted.hex)
          setPalette(Object.values(palette))
        })
  }, [file, setPalette, setVibrant])

  const handleSave = () => {
    saveDomToImage('shot', 'my-node.png')
  }

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.App>
        <Navbar onSave={handleSave} />

        <Settings onVibrantChange={handleVibrantChange} vibrant={vibrant} />

        <Preview file={file} vibrant={vibrant} />
      </S.App>
    </React.Fragment>
  )
}

export default App
