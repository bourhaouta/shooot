import React from 'react'
import { spacing } from '../../theme'

const Icon = ({ name, size = spacing[16], color }) => {
  const SVGs = {
    download: Download,
  }

  const SVG = SVGs[name]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      width={size}
      height={size}
      fill={color}
    >
      <SVG />
    </svg>
  )
}

const Download = () => (
  <path
    fill="inherit"
    d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"
  />
)

export default Icon
