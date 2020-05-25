import cx from 'classnames'
import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Button from '../atmos/button'
import Uploader from '../atmos/uploader'
import Controller from '../controller'
import Background from './background'
import Header from './header'
import Options from './options'
import Templates from './templates'

const Settings = ({ onSave }) => {
  const { file, settingsVisibility } = useContext(SettingsContext)

  return (
    <aside
      className={cx(
        'fixed inset-0 z-10 flex flex-col mr-12 sm:mr-0 transition-transform duration-200 ease-in-out transform bg-white border-r border-gray-200 sm:static sm:translate-x-0',
        { 'translate -translate-x-full': !settingsVisibility },
      )}
    >
      <Header />

      <div className='flex-1 p-4 space-y-6 overflow-auto'>
        <Controller icon='image' htmlFor='uploader' label='Upload your image'>
          <Uploader id='uploader' />
        </Controller>

        <Templates />

        <Background />

        <Options />
      </div>

      <div className='p-4 border-t border-gray-200'>
        <Button disabled={!file} onClick={onSave} icon='download' isBlock>
          Download
        </Button>
      </div>
    </aside>
  )
}

export default Settings
