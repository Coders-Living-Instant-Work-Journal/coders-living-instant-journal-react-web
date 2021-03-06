import React, { useEffect } from 'react'
import { getAllEntries, updateEntry, getOneEntry } from '../../Actions/index'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'

import { changePage } from '../../Actions/pages.js'
import { useForm } from 'react-hook-form'
import './EditDetails.scss'

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
  const { register, handleSubmit, reset } = useForm()

  const entry = entries.find(entry => entry._id === entryId)
  if (!entry) {
    changePage('HOME')
    return null
  }
  const onSubmit = (data) => {
    updateEntry(data)
    reset()
    changePage('HOME')
  }

  const entriesFetcher = () => {
    getAllEntries()
  }
  // eslint-disable-next-line
  useEffect(() => entriesFetcher(), []);

  return (
    <>

      <Form className='edit-details' onSubmit={handleSubmit(onSubmit)}>

        <Form.Group className='id-input' controlId='idInput'>
          <Form.Control type='id' name='id' ref={register} defaultValue={entryId} />
          <Form.Text className='text-update'>
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='categoryInput'>
          <Form.Label>Update Category</Form.Label>
          <Form.Control type='category' name='category' ref={register} defaultValue={entry.category} />
          <Form.Text className='text-update'>
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='textInput'>
          <Form.Label>Update Entry</Form.Label>
          <Form.Control
            as='textarea'
            rows='3'
            defaultValue={entry.text}
            name='text'
            ref={register}
            className="editDetailInput"
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails)
