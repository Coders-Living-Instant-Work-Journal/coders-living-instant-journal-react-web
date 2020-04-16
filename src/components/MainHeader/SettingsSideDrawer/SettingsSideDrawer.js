import React, { Link } from 'react'
import { connect } from 'react-redux'
import './SettingsSideDrawer.scss'

import cookie from 'react-cookies'
import { Button } from 'react-bootstrap'

const onLogOut = () => {
  cookie.remove('Auth-Token', { path: '/' })
}

const SettingsDrawer = props => {
  let settingsClasses = ['settingsSide-drawer']
  if (props.showSettings) {
    settingsClasses = ['settingsSide-drawer', 'open']
  }

  return (
    <section className={settingsClasses.join(' ')}>
      <ul>
        <li><a href='/'>Email Settings</a></li>
        <li><a href='/' onClick={onLogOut}>Log Out</a></li>
        <li>_________________________</li>
        <li><a href='/'>Instructions</a></li>
        <li><a href='/'>About</a></li>

      </ul>
    </section>
  )
}

export default SettingsDrawer
