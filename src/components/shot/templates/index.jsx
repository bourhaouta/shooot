import React from 'react'
import * as TEMPLATES from './constants'
import Expanded from './expanded'
import Standard from './standard'

const getSelectedTemplate = (name) => {
  switch (name) {
    case TEMPLATES.STANDARD:
      return Standard

    case TEMPLATES.EXPANDED:
      return Expanded

    default:
      return Standard
  }
}

const getScale = (scale) => `scale(${scale / 100})`

const Template = ({
  id,
  file,
  isBlurred,
  isBlended,
  hasToolbar,
  name,
  radius,
  scale,
  spacing,
  style,
  vibrant,
  width,
}) => {
  const SelectedTemplate = getSelectedTemplate(name)

  const getSpacing = (s, unit) =>
    `${s['top'] + unit} ${s['right'] + unit} ${s['bottom'] + unit} ${
      s['left'] + unit
    }`

  const getRadius = (r, unit) =>
    `${r['top-left'] + unit} ${r['top-right'] + unit} ${
      r['bottom-right'] + unit
    } ${r['bottom-left'] + unit}`

  const selectedTemplateProps = {
    file,
    hasToolbar,
    radius: getRadius(radius, 'px'),
    spacing: getSpacing(spacing, '%'),
  }

  return (
    <div
      className='absolute overflow-hidden bg-gray-300 shadow-xl'
      style={{ ...style, transform: getScale(scale), width }}
    >
      <div
        id={id}
        className='relative mb-0'
        style={{
          backgroundColor: vibrant,
          paddingBottom: '75%',
        }}
      >
        {isBlurred && (
          <div
            className='absolute inset-0 transform scale-105 bg-center bg-cover'
            style={{
              backgroundBlendMode: isBlended && 'multiply',
              backgroundColor: vibrant,
              backgroundImage: `url(${file})`,
              filter: 'blur(10px)',
            }}
          />
        )}

        <SelectedTemplate {...selectedTemplateProps} />
      </div>
    </div>
  )
}

Template.defaultProps = {
  radius: {
    'top-left': 10,
    'top-right': 10,
    'bottom-right': 10,
    'bottom-left': 10,
  },
  spacing: {
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
  },
  width: '100%',
  scale: 100,
}

export default Template
