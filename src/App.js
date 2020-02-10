import React, { useState } from 'react'
import * as S from './App.styled'
import Settings from './components/settings/settings'
import Preview from './components/preview/preview'

const App = () => {
  const [file, setFile] = useState(null)

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.App>
        <Settings onChange={handleChange} />
        <header className="App-header">test</header>
        <Preview file={file} />
      </S.App>
    </React.Fragment>
  )
}

export default App
