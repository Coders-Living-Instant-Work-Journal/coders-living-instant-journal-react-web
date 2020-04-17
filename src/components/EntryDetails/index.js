import React from 'react'
import { getAllEntries, deleteEntry, getOneEntry } from '../../Actions/index'
import { connect } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { changePage } from '../../Actions/pages.js'
import './EntryDetails.scss'

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    entryId: state.entryId
  }
}

const mapDispatchToProps = {
  getAllEntries,
  deleteEntry,
  getOneEntry,
  changePage
}

// pull in entries, and grab the correct entry id
const EntryDetails = ({ entries, entryId, deleteEntry, changePage }) => {
  // const entryFetcher = function () {
  //   getOneEntry(entryId)
  // }
  // // eslint-disable-next-line
  // useEffect(() => entryFetcher(), []);

  const entry = entries.find(entry => entry._id === entryId)
  if (!entry) {
    changePage('HOME')
    return null
  }

  return (
    <>
      <Container className='entry-details'>
        <Row className='entry-headers' key={uuidv4()}>
          <Col className="entry-category" key={uuidv4()}>{entry.category}</Col>
          <Button className="entry-delete-button" onClick={() => deleteEntry(entry._id)} variant='danger'>X</Button>
        </Row>
        <Row className="entry-time">
          <Col key={uuidv4()}>{entry.date}</Col>
        </Row>
        <Row key={uuidv4()}>
          <Col className='entryDetail-text' key={uuidv4()}>{entry.text}</Col>
        </Row>
      </Container>

      <Button onClick={() => { changePage('EDIT_DETAILS') }}>Edit Entry</Button>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetails)
