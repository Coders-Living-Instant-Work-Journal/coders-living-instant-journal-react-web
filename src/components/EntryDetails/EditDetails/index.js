import React from 'react'
import { getAllEntries, updateEntry, getOneEntry } from '../../Actions/index'
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
  updateEntry,
  getOneEntry,
  changePage
}

const EditDetails = ({ entries, entryId, updateEntry, changePage }) => {

  const entry = entries.find(entry => entry._id === entryId)
  if (!entry) {
    changePage('HOME')
    return null
  }
  const onClick = () => {
    const updatedEntry = {
      ...entry,
      category: '',
      text: ''
    }

    updateEntry(updatedEntry)
    // changePage here
  }
  return (
    <>
      <Container>
        <Row className='entry-headers' key={uuidv4()}>
          <Col key={uuidv4()}>{entry.date}</Col>
          <Col key={uuidv4()}>{entry.category}</Col>
          <Button onClick={onClick} variant='danger'>X</Button>
        </Row>
        <Row key={uuidv4()}>
          <Col className='entry-text' key={uuidv4()}>{entry.text}</Col>
        </Row>
      </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails)
