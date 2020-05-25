import cx from 'classnames'
import React from 'react'
import Icon from '../icon'

export const Button = ({
  type = 'button',
  children,
  disabled,
  icon,
  onClick,
}) => (
  <button
    className={cx(
      'inline-flex items-center justify-center w-full h-12 px-10 space-x-3 text-white rounded-lg cursor-pointer bg-primary-500',
      { 'text-gray-800 bg-gray-200 cursor-not-allowed': disabled },
    )}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {icon && <Icon name={icon} />}

    <span>{children}</span>
  </button>
)

export default Button
