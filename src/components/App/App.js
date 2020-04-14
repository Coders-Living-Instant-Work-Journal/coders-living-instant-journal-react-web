import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'

import Login from '../Login'

import store from '../../Store'
import { Provider } from 'react-redux'


import MainHeader from '../MainHeader';
// import MainFooter from "./src/components/MainFooter";


// const App = () => {
//   return (
//     <>
//       <Container>
//         <MainHeader />
//         <MainFooter />
//       </Container>
//     </>
//   );
// };

// export default App;

class App extends Component {

  state = {
    sideDrawerOpen: false,
  }

  ///Menu toggler 
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }


  render() {

    //Menu backdrop
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }


    return (
      <Provider store={store}>
        <Container className="App">
          <Login>
            <MainHeader drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
        {/* <MainFooter /> */}
          </Login>
        </Container>
      </Provider>
    )
  }

}

export default App;


