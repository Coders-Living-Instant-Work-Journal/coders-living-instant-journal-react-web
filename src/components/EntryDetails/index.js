import React from 'react'
import { getAllEntries, deleteEntry, getOneEntry } from '../../Actions/index'
import { connect } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { changePage } from '../../Actions/pages.js'


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
      <Container>
        <Row className='entry-headers' key={uuidv4()}>
          <Col key={uuidv4()}>{entry.date}</Col>
          <Col key={uuidv4()}>{entry.category}</Col>
          <Button onClick={() => deleteEntry(entry._id)} variant='danger'>X</Button>
        </Row>
        <Row key={uuidv4()}>
          <Col className='entry-text' key={uuidv4()}>{entry.text}</Col>
        </Row>
      </Container>

      <Button onClick={() => { changePage('EDIT_DETAILS') }}>Edit Entry</Button>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetails)
