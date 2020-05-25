import cx from 'classnames'
import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Toggle from '../atmos/toggle'
import Controller from '../controller'
import Template from '../shot/templates'
import TEMPLATES from '../shot/templates/constants'

const Templates = () => {
  const { template, setTemplate, setHasToolbar, hasToolbar } = useContext(
    SettingsContext,
  )

  return (
    <Controller icon='layout' label='Templates'>
      <div className='space-y-3'>
        <Toggle
          id='toolbar'
          label='Show toolbar'
          onChange={() => setHasToolbar(!hasToolbar)}
          checked={hasToolbar}
        />

        <ul className='grid grid-cols-3 gap-3'>
          {TEMPLATES.map((name) => (
            <li key={name} onClick={() => setTemplate(name)}>
              <div
                className={cx(
                  'relative overflow-hidden transition-all duration-200 border-2 rounded cursor-pointer',
                  template === name
                    ? 'shadow border-primary-300'
                    : 'border-transparent',
                )}
              >
                <Template name={name} style={{ position: 'static' }} />
              </div>
              <span className='m-1 text-xs capitalize'>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Controller>
  )
}

export default Templates
