import React from 'react'
import Icon from '../atmos/icon'

const Controller = ({ label, icon, children }) => {
  return (
    <div>
      {label && (
        <h2 className='flex items-center block mb-3 space-x-2 font-medium text-secondary-600'>
          {icon && <Icon name={icon} />}
          <span>{label}</span>
          <hr className='flex-1 opacity-50' />
        </h2>
      )}

      <div>{children}</div>
    </div>
  )
}

export default Controller
