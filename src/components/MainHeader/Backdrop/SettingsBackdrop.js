import React from 'react'

import './SettingsBackdrop.scss'

const settingsBackdrop = props => (
  <div className='settings_backdrop' onClick={props.settingsClick} />
)

export default settingsBackdrop
