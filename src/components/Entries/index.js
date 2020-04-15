import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllEntries } from '../../Actions/index'
import { Row, Col, Container } from 'react-bootstrap'
import uuid from 'uuid'

import './Entries.scss'

const mapStateToProps = (state) => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = {
  getAllEntries
}

const Entries = ({ entries, getAllEntries }) => {

  const entryFetcher = function() {
    getAllEntries()
  }
// eslint-disable-next-line
  useEffect(() => entryFetcher(), []);

  return (
    <>
      <h1 className='title'>Your Journal Entries</h1>

      <Container>
        {entries.map((entry) => (
          <>
            <Row className='entry-headers' key={entry._id}>
              <Col key={entry._id + 1}>{entry.date}</Col>
              <Col key={entry._id + 2}>{entry.category}</Col>
            </Row>
            <Row key={entry._id + 3}>
              <Col className='entry-text' key={entry._id + 4}>{entry.text}</Col>
            </Row>
          </>
        ))}
      </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
