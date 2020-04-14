import React from 'react';
import { connect } from 'react-redux'

import ToggleButton from '../JournalSideDrawer/ToggleButton'
import './MainHeader.scss'

//Tool bar images 
import logo from '../../assets/logo.png'
import { GoGear } from "react-icons/go";

const mapStateToProps = state => {
    return {
        journals: state.journals
    }
}

const MainHeader = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <ToggleButton click={props.journalDrawerClickHandler} />
            </div>
            <div className="spacer" />
            <a className="toolbar_logo" href="/"><img className="logo" src={logo} alt="Logo" /></a>
            
            <div className="spacer" />
            <div className="settingsMenu">
                <GoGear className="gear" onClick={props.settingsClickHandler} />
            </div>
        </nav>
    </header>
)

export default connect(mapStateToProps)(MainHeader)