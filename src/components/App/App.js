import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import Entries from '../Entries';
import NewEntry from '../NewEntry';
import EntryDetails from '../EntryDetails';
import Login from '../Login';
//dispatch
import { changePage } from '../../Actions/pages';
import { getAllJournals } from '../../Actions';
import { getEmailProfiles as getAllProfiles } from '../../Actions/emailProfiles';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

//consts
import { Pages } from '../../Reducers/activePageReducer';

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
  };
};

function App({ activePage, getAllProfiles, getAllJournals }) {
  

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
}

export default connect(mapStateToProps, { changePage, getAllJournals, getAllProfiles })(App);
