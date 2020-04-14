import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

import store from "../../Store";
import { Provider } from "react-redux";
import MainHeader from "../MainHeader";
import Entries from "../Entries";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  ///Menu toggler
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    //Menu backdrop
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Provider store={store}>
        <Container className="App">
          <MainHeader drawerClickHandler={this.drawerToggleClickHandler} />
          <Entries />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          {/* <MainFooter /> */}
        </Container>
      </Provider>
    );
  }
}

export default App;
