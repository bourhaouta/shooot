import React, { useState } from 'react'
import Shot from '../shot/shot'
import * as S from './preview.styled'

const Preview = ({ file, vibrant }) => {
  const [scale, setScale] = useState(30)
  const shotProps = { file, vibrant, scale }

  return (
    <S.Preview>
      <Shot {...shotProps} />

      <S.Scale
        type='range'
        min='10'
        onChange={({ target }) => setScale(target.value)}
        value={scale}
      />
    </S.Preview>
  )
}

export default Preview
