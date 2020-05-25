import cx from 'classnames'
import React from 'react'

const colors = ['bg-red-500', 'bg-orange-500', 'bg-green-500']

const Toolbar = ({ children, hasToolbar }) => {
  return hasToolbar ? (
    <div className='flex flex-col h-full'>
      <div className='flex p-3 space-x-3 bg-white border-b border-gray-300'>
        {colors.map((color) => (
          <span key={color} className={cx(color, 'w-5 h-5 rounded-full')} />
        ))}
      </div>
      <div className='relative flex-1'>{children}</div>
    </div>
  ) : (
    children
  )
}

export default Toolbar
