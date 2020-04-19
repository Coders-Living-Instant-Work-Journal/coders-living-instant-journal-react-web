import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllEntries, getAllJournals } from '../../Actions/index'
import { getEmailProfiles } from '../../Actions/emailProfiles'
import { Row, Col, Container } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import MainFooter from '../MainFooter'
import { changePage } from '../../Actions/pages'
import { passEntryId } from '../../Actions/entryId'
import './Entries.scss'

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    activePage: state.activePage,
    entryDetails: state.entryDetails
  }
}

const mapDispatchToProps = {
  getAllEntries,
  changePage,
  passEntryId
}

const Entries = ({ entries, getAllEntries, activePage, changePage, entryDetails, passEntryId }) => {
  const entryFetcher = function () {
    getAllEntries()
    getAllJournals()
    getEmailProfiles()
  }
  // eslint-disable-next-line
  useEffect(() => entryFetcher(), []);
  console.log('entriessss', entries)
  return (
    <>
      <Container className="entry-container">
      <h1 className='title'>Journal Entries</h1>
      <MainFooter />
        {entries[0] === 'No entries found.' ? "You don't have any entries for this journal." : entries.map((entry) => (
          <>

            <div
              key={uuidv4()}
              onClick={() => {
                changePage('ENTRY_DETAILS')
                passEntryId(entry._id)
                // console.log('entry id', entry._id)
              }}
            >
              <Row className='entry-headers' key={uuidv4()}>
                {/* <Col key={uuidv4()}>{entry.date}</Col> */}
                <Col key={uuidv4()}>{entry.category}</Col>
              </Row>
              <Row key={uuidv4()}>
                <Col className='entry-text' key={uuidv4()}>{entry.text && entry.text.length > 60 ? entry.text.substring(0, 60) + '...' : entry.text}</Col>
              </Row>
            </div>
          </>
        ))}
      </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
