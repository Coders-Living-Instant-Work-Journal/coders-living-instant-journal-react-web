import React, { useState } from 'react'
import { connect } from 'react-redux'
import './SettingsSideDrawer.scss'

import cookie from 'react-cookies'

import EmailProfiles from '../EmailSettings/EmailSettings'
import ProfileDetail from '../EmailSettings/ProfileDetails'
import CreateProfile from '../EmailSettings/CreateProfile'

const onLogOut = () => {
  cookie.remove('Auth-Token', { path: '/' })
}

const SettingsDrawer = ({ journals, showSettings }) => {
  const Menus = {
    EMAIL: 'EMAIL',
    MAIN: 'MAIN',
    PROFILE_DETAIL: 'PROFILE_DETAIL',
    CREATE: 'CREATE'

  }

  const [currentView, setCurrentView] = useState(Menus.MAIN)
  const [currentDetail, setCurrentDetail] = useState(null)

  let settingsClasses = ['settingsSide-drawer']
  if (showSettings) {
    settingsClasses = ['settingsSide-drawer', 'open']
  }

  function currentViewHandler (menu) {
    setCurrentView(Menus[menu])
  }

  return (
    <section className={settingsClasses.join(' ')}>

      {currentView === Menus.MAIN && ( // main settings menu
        <ul>
          <li><a href='#' onClick={() => currentViewHandler(Menus.EMAIL)}>Email Settings</a></li>
          <li className="log-out-button"> <a href='/' onClick={onLogOut}>Log Out</a></li>
        </ul>
      )}

      {currentView === Menus.EMAIL && ( // email settings menu
        <ul>
          <li><a href='#' onClick={() => currentViewHandler(Menus.MAIN)}>Back</a></li>
          <li>
            <EmailProfiles
              viewChange={currentViewHandler}
              views={Menus}
              setCurrentDetail={setCurrentDetail}
            />
          </li>
        </ul>
      )}

      {currentView === Menus.PROFILE_DETAIL && ( // profiles details menu
        <ul>
          <li><a href='#' onClick={() => currentViewHandler(Menus.EMAIL)}>Back</a></li>
          <li><ProfileDetail profile={currentDetail} /></li>
        </ul>
      )}

      {currentView === Menus.CREATE && ( // createa a new email profile
        <ul>
          <li><a href='#' onClick={() => currentViewHandler(Menus.EMAIL)}>Back</a></li>
          <li>
            <CreateProfile
              views={Menus}
              viewChange={currentViewHandler}
              journals={journals}
              currentDetail={currentDetail}
            />
          </li>
        </ul>
      )}
    </section>
  )
}

const mapStateToProps = (state) => {
  return { journals: state.journals }
}

export default connect(mapStateToProps, null)(SettingsDrawer)
