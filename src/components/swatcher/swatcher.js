import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import * as S from './swatcher.styled'

const Swatcher = () => {
  const { vibrant, setVibrant, palette } = useContext(SettingsContext)

  return (
    <div>
      <S.Swatcher>
        <S.Picker>
          <label htmlFor='picker'>
            <span role='img' aria-label='Color pciker'>
              🎨
            </span>
          </label>
          <input
            id='picker'
            type='color'
            onChange={e => setVibrant(e.target.value)}
            value={vibrant}
            placeholder={vibrant}
          />
        </S.Picker>
        <input
          type='text'
          onChange={e => setVibrant(e.target.value)}
          value={vibrant}
        />
      </S.Swatcher>

      {palette && (
        <S.Palette>
          {palette.map(({ hex }) => (
            <S.PaletteItem
              key={hex}
              color={hex}
              isSelected={hex === vibrant}
              onClick={() => setVibrant(hex)}
            />
          ))}
        </S.Palette>
      )}
    </div>
  )
}

export default Swatcher
