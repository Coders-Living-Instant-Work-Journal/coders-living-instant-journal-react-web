import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getAllEntries, createEntry } from '../../Actions/index'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { changePage } from '../../Actions/pages'
import { v4 as uuidv4 } from 'uuid'
import './NewEntry.scss'
const mapStateToProps = (state) => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = {
  getAllEntries,
  changePage,
  createEntry
}

const NewEntry = ({ entries, getAllEntries, changePage, createEntry }) => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    await createEntry(data)
    reset()
    changePage('HOME')
  }

  const entriesFetcher = () => {
    getAllEntries()
  }
  // eslint-disable-next-line
  useEffect(() => entriesFetcher(), []);

  const categories = ['Wine', ...entries.map(entry => entry.category)]
  const uniqueCategories = [...new Set(categories)]

  return (
    <>
      <Form className='entry-form' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='controlSelect1'>


          <Form.Control as='select' name='category' ref={register}>
            <option>--- Cateogries --- </option>
            {uniqueCategories.map((category, index) => (
              // replace banana with {category}
              <option key={uuidv4()} value={category}>{category}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='textAreaInput'>
          {/* not passing back as text to create route */}

          <Form.Control
            as='textarea'
            rows='3'
            placeholder='Start your entry here...'
            name='text'
            ref={register}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)
