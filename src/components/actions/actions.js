import React from 'react'

const Actions = ({ onSave }) => {
  return (
    <div>
      <button onClick={onSave} type="button">
        Generate
      </button>
    </div>
  )
}

export default Actions
