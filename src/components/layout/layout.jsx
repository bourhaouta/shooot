import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import '../../tailwind/generated.css'
import Icon from '../atmos/icon'

const Layout = ({ children }) => {
  const { setSettingsVisibility } = useContext(SettingsContext)

  return (
    <div className='grid items-stretch h-screen text-sm bg-gray-100 text-secondary-500 sm:grid-cols-app'>
      <div
        onClick={() => setSettingsVisibility(true)}
        className='fixed top-0 left-0 z-10 p-1 m-3 bg-white border border-gray-300 rounded shadow sm:hidden'
      >
        <Icon name='settings' size='18' />
      </div>

      {children}
    </div>
  )
}

export default Layout
