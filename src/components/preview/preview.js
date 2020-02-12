import React, { useState } from 'react'
import Shot from '../shot/shot'
import * as S from './preview.styled'

const Preview = ({ file, spacing, radius, vibrant }) => {
  const [scale, setScale] = useState(0.5)

  const shotProps = { file, radius, spacing, vibrant, scale }

  return (
    <S.Preview>
      <Shot {...shotProps} />

      <S.Scale
        type="range"
        min=".1"
        max="1"
        step=".1"
        onChange={({ target }) => setScale(target.value)}
        value={scale}
      />
    </S.Preview>
  )
}

export default Preview
