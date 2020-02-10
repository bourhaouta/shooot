import React from 'react'

const Settings = ({ onChange }) => {
  return (
    <div>
      <input type="file" onChange={onChange} />
    </div>
  )
}

export default Settings
