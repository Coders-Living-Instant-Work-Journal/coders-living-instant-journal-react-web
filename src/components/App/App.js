import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import PageFooter from '../Footer'
import EditDetails from '../EditDetails'
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'
import Entries from '../Entries'
import NewEntry from '../NewEntry'
import EntryDetails from '../EntryDetails'
import Login from '../Login'
// dispatch
import { changePage } from '../../Actions/pages'
import { getAllJournals } from '../../Actions'
import { getEmailProfiles as getAllProfiles } from '../../Actions/emailProfiles'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'

// consts
import { Pages } from '../../Reducers/activePageReducer'

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage
  }
}

function App ({ activePage, changePage }) {
  console.log('activePage', activePage, 'all pges: ', Pages)
  return (
    <>
      <Container className='App'>
        <Login>
          <MainHeader />
          {activePage === Pages.HOME && <Entries />}
          {activePage === Pages.NEW_ENTRY && <NewEntry />}
          {activePage === Pages.ENTRY_DETAILS && <EntryDetails />}
          {activePage === Pages.EDIT_DETAILS && <EditDetails />}
        </Login>
      <PageFooter />
      </Container>
    </>
  )
}

export default connect(mapStateToProps, { changePage })(App)
