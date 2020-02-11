import React from 'react'
import Shot from '../shot/shot'

const Preview = ({ file, spacing, radius, vibrant }) => {
  return (
    <div id="capture">
      {vibrant}
      <Shot file={file} spacing={spacing} radius={radius} vibrant={vibrant} />
    </div>
  )
}

export default Preview
