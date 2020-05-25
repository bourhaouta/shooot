import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Controller from '../controller'

const Settings = () => {
  const {
    setSpacing,
    setAllSpacing,
    spacing,
    setRadius,
    setAllRadius,
    radius,
  } = useContext(SettingsContext)

  const spacingController = [
    {
      side: 'top',
      position: 'col-start-2 row-start-1',
    },
    {
      side: 'right',
      position: 'col-start-3 row-start-2',
    },
    {
      side: 'bottom',
      position: 'col-start-2 row-start-3',
    },
    {
      side: 'left',
      position: 'col-start-1 row-start-2',
    },
  ]

  const radiusController = [
    {
      side: 'top-left',
      position: 'col-start-1 row-start-1',
    },
    {
      side: 'top-right',
      position: 'col-start-3 row-start-1',
    },
    {
      side: 'bottom-right',
      position: 'col-start-3 row-start-3',
    },
    {
      side: 'bottom-left',
      position: 'col-start-1 row-start-3',
    },
  ]

  const controllers = [
    {
      label: 'Spacing',
      icon: 'spacing',
      getter: spacing,
      allGetter: spacing,
      setter: setSpacing,
      allSetter: setAllSpacing,
      controller: spacingController,
    },
    {
      label: 'Radius',
      icon: 'radius',
      getter: radius,
      setter: setRadius,
      allSetter: setAllRadius,
      controller: radiusController,
    },
  ]

  return (
    <div className='grid grid-cols-2 gap-6'>
      {controllers.map(
        ({ label, icon, controller, getter, setter, allSetter }) => (
          <Controller key={label} icon={icon} label={label}>
            <div className='relative grid grid-cols-3 grid-rows-3 row-gap-3 col-gap-2'>
              <div className='absolute inset-0 mx-4 my-2 border-4 border-gray-200 rounded' />
              <div className='col-start-2 row-start-2'>
                <input
                  className='relative z-10 w-full h-6 text-center border border-gray-300 rounded focus:border-primary-500'
                  type='number'
                  min='0'
                  onChange={({ target: { value } }) => allSetter(value)}
                  placeholder='All'
                  value={getter[0]}
                />
              </div>
              {controller.map(({ side, position }) => (
                <div key={side} className={position}>
                  <input
                    className='relative z-10 w-full h-6 text-center border border-gray-300 rounded focus:border-primary-500'
                    type='number'
                    min='0'
                    onChange={({ target: { value } }) =>
                      setter({ ...getter, [side]: value })
                    }
                    value={getter[side]}
                  />
                </div>
              ))}
            </div>
          </Controller>
        ),
      )}
    </div>
  )
}

export default Settings
