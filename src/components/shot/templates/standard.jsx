import React from 'react'
import Toolbar from '../../atmos/toolbar/toolbar'

const Standard = ({ file, hasToolbar, radius, spacing }) => (
  <div
    className='absolute inset-0 overflow-hidden bg-gray-200 shadow-2xl'
    style={{
      margin: spacing,
      borderRadius: radius,
    }}
  >
    <Toolbar hasToolbar={hasToolbar}>
      <div
        className='absolute inset-0 w-full h-full bg-top bg-full'
        style={{
          backgroundImage: `url(${file})`,
        }}
      />
    </Toolbar>
  </div>
)

Standard.defaultProps = {
  file: '',
  hasToolbar: false,
  radius: 2,
  spacing: 20,
}

export default Standard
