import React from 'react'
import Toolbar from '../../atmos/toolbar/toolbar'

const Expanded = ({ file, hasToolbar, radius, spacing }) => (
  <React.Fragment>
    <div
      className='absolute inset-0 z-10 w-1/2 h-full overflow-hidden bg-gray-200 shadow-2xl'
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

    <div
      className='absolute right-0 w-1/2 h-full bg-gray-200 bg-center shadow-2xl bg-full'
      style={{
        margin: spacing,
        marginTop: 0,
        marginBottom: 0,
        backgroundImage: `url(${file})`,
      }}
    />
  </React.Fragment>
)

Expanded.defaultProps = {
  file: '',
  hasToolbar: false,
  radius: 2,
  spacing: 20,
}

export default Expanded
