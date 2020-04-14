import React, {Link} from 'react'
import { connect } from 'react-redux'
import './SettingsSideDrawer.scss'



const SettingsDrawer = props => {

    let settingsClasses = ['settingsSide-drawer']
    if (props.showSettings) {
        settingsClasses = ['settingsSide-drawer', 'open']
    }

    return (
        <section className={settingsClasses.join(' ')} >
            <ul>
                <li><a href="/">Email Settings</a></li>
                <li><a href="/">Log Out</a></li>

            </ul>
        </section>
    )
}

export default SettingsDrawer