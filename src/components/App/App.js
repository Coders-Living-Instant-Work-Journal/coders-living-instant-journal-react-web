import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import store from '../../Store';
import { Provider } from 'react-redux';
import MainHeader from '../MainHeader';
import Entries from '../Entries';
import JournalSideDrawer from '../JournalSideDrawer/JournalSideDrawer';
import JournalBackdrop from '../Backdrop/JournalBackdrop';
import SettingsSideDrawer from '../SettingsSideDrawer/SettingsSideDrawer';
import SettingsBackdrop from '../Backdrop/SettingsBackdrop';

import Login from '../Login';

class App extends Component {
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
    let journalBackdrop;
    if (this.state.journalDrawerOpen) {
      journalBackdrop = (
        <JournalBackdrop click={this.journalBackdropClickHandler} />
      );
    }

    //Settings backdrop
    let settingsBackdrop;
    if (this.state.settingsDrawerOpen) {
      settingsBackdrop = (
        <SettingsBackdrop settingsClick={this.settingsBackdropClickHandler} />
      );
    }

    return (
      <Provider store={store}>
        <Container className='App'>
          <Login>
            <MainHeader
              journalDrawerClickHandler={this.journalDrawerToggleClickHandler}
              settingsClickHandler={this.settingsToggleClickHandler}
            />
            <JournalSideDrawer showJournal={this.state.journalDrawerOpen} />
            {journalBackdrop}
            <Entries />
            <SettingsSideDrawer showSettings={this.state.settingsDrawerOpen} />
            {settingsBackdrop}
            {/* <MainFooter /> */}
          </Login>
        </Container>
      </Provider>
    );
  }
}

export default App;
