import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Icon from '../atmos/icon'

const Header = () => {
  const { setSettingsVisibility } = useContext(SettingsContext)

  return (
    <header className='flex items-center p-4 border-b border-gray-200'>
      <div
        className='mr-3 sm:hidden'
        onClick={() => setSettingsVisibility(false)}
      >
        <Icon name='back' size='18' />
      </div>

      <a href='/'>
        <img
          className='h-8 mr-3'
          src={require('../../images/brand.svg')}
          alt={process.env.REACT_APP_WEBSITE_NAME}
        />
      </a>

      <span className='px-2 text-xs text-gray-600 bg-gray-200 rounded'>
        {process.env.REACT_APP_WEBSITE_VERSION}
      </span>

      <a
        className='p-1 ml-auto text-gray-700 transition-colors duration-200 rounded-full hover:text-gray-900'
        href={process.env.REACT_APP_WEBSITE_REPOSITORY}
        target='__blank'
      >
        <Icon name='github' size='24' />
      </a>
    </header>
  )
}
export default Header
