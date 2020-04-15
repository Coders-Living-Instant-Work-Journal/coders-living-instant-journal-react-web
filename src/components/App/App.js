import React from 'react';
import { Container } from 'react-bootstrap';
<<<<<<< HEAD
import { Provider, connect } from 'react-redux';

import MainFooter from '../MainFooter';
import Entries from '../Entries';
import NewEntry from '../NewEntry';
import EntryDetails from '../EntryDetails';
import Login from '../Login'
//dispatch
import { changePage } from '../../Actions/pages';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
=======
import JournalSideDrawer from '../JournalSideDrawer/JournalSideDrawer';
import JournalBackdrop from '../Backdrop/JournalBackdrop';
import SettingsSideDrawer from '../SettingsSideDrawer/SettingsSideDrawer';
import SettingsBackdrop from '../Backdrop/SettingsBackdrop';
// import MainFooter from '../MainFooter'
import Entries from '../Entries'
import NewEntry from '../NewEntry'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
>>>>>>> 8896142b6bfdc4ff397910fbc9a9616fd653c630

//consts
import { Pages } from '../../Reducers/activePageReducer';

import MainHeader from '../MainHeader';

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
  };
};

function App({ activePage, changePage }) {
  console.log('activePage', activePage, 'all pges: ', Pages);
  return (
    <Container className="App">
      <Login>
        <MainHeader />
        {activePage === Pages.HOME && <Entries />}
        {activePage === Pages.NEW_ENTRY && <NewEntry />}
        {activePage === Pages.ENTRY_DETAILS && <EntryDetails />}
      </Login>
    </Container>
  );
=======
class App extends Component {
	constructor() {
		super()
		this.state = {
			journalDrawerOpen: false,
			settingsDrawerOpen: false
		};
	}

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
				<Container className="App">
					<Login>
					<MainHeader
						journalDrawerClickHandler={this.journalDrawerToggleClickHandler}
						settingsClickHandler={this.settingsToggleClickHandler}
					/>
					<JournalSideDrawer showJournal={this.state.journalDrawerOpen} />
					{journalBackdrop}
					<SettingsSideDrawer showSettings={this.state.settingsDrawerOpen} />
					{settingsBackdrop}

					<Router>
						<Switch>
							<Route path="/" exact>
								<Entries />
							</Route>
							<Route path="/new-entry" exact>
								<NewEntry />
							</Route>
						</Switch>
						{/* <MainFooter /> */}
					</Router>

					</Login>
				</Container>
			</Provider>
		);
	}
>>>>>>> 8896142b6bfdc4ff397910fbc9a9616fd653c630
}

export default connect(mapStateToProps, { changePage })(App);
