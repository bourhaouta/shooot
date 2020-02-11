import React, { useState } from 'react'
import Shot from '../shot/shot'
import * as S from './preview.styled'

const Preview = ({ file, spacing, radius, vibrant }) => {
  const [scale, setScale] = useState(75)

  const shotProps = { file, radius, spacing, vibrant, scale }

  return (
    <S.Preview>
      <Shot {...shotProps} />

      <S.Scale
        type="range"
        min="10"
        max="100"
        step="5"
        onChange={({ target }) => setScale(target.value)}
        value={scale}
      />
    </S.Preview>
  )
}

export default Preview
