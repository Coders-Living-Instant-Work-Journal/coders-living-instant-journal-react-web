import React, { useEffect, useState } from 'react'
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
  const [optionValue, setOptionValue] = useState('')

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    await createEntry(data)
    reset()
    changePage('HOME')
    // console.log('submit data', data)
  }

  const entriesFetcher = () => {
    getAllEntries()
  }
  // eslint-disable-next-line
  useEffect(() => entriesFetcher(), []);


  // const handleChange = (e) => {
  //   let value = e.target.value
  // }

  const categories = entries.map(entry => entry.category)
  const uniqueCategories = [...new Set(categories)]

  return (
    <>
      <Form className='entry-form' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='controlSelect1'>
          <Form.Control as='select' selected onChange={e => setOptionValue(e.target.value)}>
            <option>--- Add New Category ---</option>

            {uniqueCategories.map((category) => (

              <option key={uuidv4()} value={category}>{category}</option>
            ))}
          </Form.Control>
        </Form.Group>


        <Form.Group controlId='categoryInput'>
          <Form.Label>Category</Form.Label>
          {/* put in logic to show this text if defaultValue equals Add New Category */}
          <Form.Control type='category' name='category' ref={register} defaultValue={optionValue} />
          <Form.Text className='text-update'>
          </Form.Text>
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
