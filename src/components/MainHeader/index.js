import React, { useState } from 'react'
import { connect } from 'react-redux'

import ToggleButton from './JournalSideDrawer/ToggleButton'
import Opacity from './Backdrop/JournalBackdrop'
import './MainHeader.scss'

// Tool bar images
import logo from '../../assets/logo.png'
import { GoGear } from 'react-icons/go'
import JournalSideDrawer from './JournalSideDrawer/JournalSideDrawer'
import SettingsSideDrawer from './SettingsSideDrawer/SettingsSideDrawer'

const mapStateToProps = (state) => {
  return {
    journals: state.journals
  }
}

const MainHeader = () => {
  // hooks
  const [journalDrawerOpen, setJournalDrawerOpen] = useState(false)
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false)

  // functions
  const journalDrawerToggle = () => {
    setJournalDrawerOpen(!journalDrawerOpen)
  }

  const settingsDrawerToggle = () => {
    setSettingsDrawerOpen(!settingsDrawerOpen)
  }

  return (
    <header className='toolbar'>
      <nav className='toolbar_navigation'>
        <div>
          <ToggleButton click={journalDrawerToggle} />
          {journalDrawerOpen &&
            <>
              <Opacity click={() => setJournalDrawerOpen(false)} />
              <JournalSideDrawer />
            </>}

        </div>
        <div className='spacer' />
        <a className='toolbar_logo' href='/'>
          <img className='logo' src={logo} alt='Logo' />
        </a>

        <div className='spacer' />
        <div className='settingsMenu'>
          <GoGear className='gear' onClick={settingsDrawerToggle} />
          {settingsDrawerOpen &&
            <>
              <SettingsSideDrawer />
              <Opacity click={() => setSettingsDrawerOpen(false)} />
            </>}
        </div>
      </nav>
    </header>
  )
}

export default connect(mapStateToProps)(MainHeader)
