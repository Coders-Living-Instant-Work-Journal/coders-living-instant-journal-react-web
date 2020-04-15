import React from 'react'

import { Container } from 'react-bootstrap';
import JournalSideDrawer from '../JournalSideDrawer/JournalSideDrawer';
import JournalBackdrop from '../MainHeader/Backdrop/JournalBackdrop';
import SettingsSideDrawer from '../MainHeader/SettingsSideDrawer/SettingsSideDrawer';
import SettingsBackdrop from '../MainHeader/Backdrop/SettingsBackdrop';
import MainFooter from '../MainFooter';
import Entries from '../Entries';
import NewEntry from '../NewEntry';
import EntryDetails from '../EntryDetails';

class Drawers extends React.Component {
  state = {
    journalDrawerOpen: false,
    settingsDrawerOpen: false,
  };

  ///Journal Menu toggler
  journalDrawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { journalDrawerOpen: !prevState.journalDrawerOpen };
    });
  };

  journalBackdropClickHandler = () => {
    this.setState({ journalDrawerOpen: false });
  };

  //Settings Toggler
  settingsToggleClickHandler = () => {
    this.setState((prevState) => {
      return { settingsDrawerOpen: !prevState.settingsDrawerOpen };
    });
  };

  settingsBackdropClickHandler = () => {
    this.setState({ settingsDrawerOpen: false });
  };

  render() {
    //Journal Menu backdrop
    // let journalBackdrop;
    // if (this.state.journalDrawerOpen) {
    //   journalBackdrop = <JournalBackdrop click={this.journalBackdropClickHandler} />;
    // }

    //Settings backdrop
    // let settingsBackdrop;
    // if (this.state.settingsDrawerOpen) {
    //   settingsBackdrop = (
    //     <SettingsBackdrop settingsClick={this.settingsBackdropClickHandler} />
    //   );
    // }

    return (
      <>
      {this.state.journalDrawerOpen && <JournalBackdrop click={this.journalBackdropClickHandler} />}
      {this.state.settingsDrawerOpen && <SettingsBackdrop settingsClick={this.settingsBackdropClickHandler} />} 
      </>
    );
  }
}

export default Drawers;
