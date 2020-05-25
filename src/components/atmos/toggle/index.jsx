import cx from 'classnames'
import React from 'react'

const Toggle = ({ id, checked, label, onChange }) => (
  <div className='flex items-center'>
    <label
      htmlFor={id}
      className={cx(
        'inline-flex w-8 p-1 transition-colors duration-200 rounded-full cursor-pointer',
        checked ? 'bg-primary-400' : 'bg-gray-300',
      )}
    >
      <input
        id={id}
        type='checkbox'
        onChange={onChange}
        className={cx(
          'w-2 h-2 bg-white rounded-full shadow appearance-none cursor-pointer',
          { 'ml-auto': checked },
        )}
      />
    </label>

    <label
      htmlFor={id}
      className={cx('ml-3 transition-opacity duration-200 cursor-pointer', {
        'opacity-50': !checked,
      })}
    >
      {label}
    </label>
  </div>
)

export default Toggle
