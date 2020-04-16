import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllEntries } from '../../Actions/index'
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
  }
  // eslint-disable-next-line
  useEffect(() => entryFetcher(), []);

  return (
    <>
      <h1 className='title'>Journal Entries</h1>

      <Container>
        {entries.map((entry) => (
          <>

            <div
              key={uuidv4()}
              onClick={() => {
                changePage('ENTRY_DETAILS')
                passEntryId(entry._id)
                // console.log('entry id', entry._id)
              }}>
              <Row className='entry-headers' key={uuidv4()}>
                <Col key={uuidv4()}>{entry.date}</Col>
                <Col key={uuidv4()}>{entry.category}</Col>
              </Row>
              <Row key={uuidv4()}>
                <Col className='entry-text' key={uuidv4()}>{entry.text.substring(0, 60) + '...'}</Col>
              </Row>
            </div>
          </>
        ))}
      </Container>
      <MainFooter />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
