import domtoimage from 'dom-to-image-more'
import { saveAs } from 'file-saver'
import * as Vibrant from 'node-vibrant'
import React, { useContext, useEffect } from 'react'
import ReactGA from 'react-ga'
import Layout from './components/layout/layout'
import Preview from './components/preview'
import Settings from './components/settings'
import { SettingsContext } from './store'

ReactGA.initialize('UA-114909372-3')
ReactGA.pageview(window.location.pathname + window.location.search)

const App = () => {
  const handleVibrantChange = ({ target }) => setVibrant(target.value)

  const { file, setVibrant, setPalette } = useContext(SettingsContext)

  useEffect(() => {
    file &&
      Vibrant.from(file)
        .getPalette()
        .then((palette) => {
          setVibrant(palette.Vibrant.hex)
          setPalette(Object.values(palette))
        })
  }, [file, setPalette, setVibrant])

  const handleSave = () => {
    ReactGA.event({
      category: 'User',
      action: 'Created a Shot',
    })

    const el = document.getElementById('frame')
    const scale = 2
    const output = 'download.png'

    domtoimage
      .toBlob(el, {
        height: el.offsetHeight * scale,
        style: {
          transform: `scale(${scale}) translate(${
            el.offsetWidth / 2 / scale
          }px, ${el.offsetHeight / 2 / scale}px)`,
        },
        width: el.offsetWidth * scale,
      })
      .then((blob) => saveAs(blob, output))
      .catch((error) => console.error('Oops, something went wrong!', error))
  }

  return (
    <Layout>
      <Settings onVibrantChange={handleVibrantChange} onSave={handleSave} />
      <Preview />
    </Layout>
  )
}

export default App
