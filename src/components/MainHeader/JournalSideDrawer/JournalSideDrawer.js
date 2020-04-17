import React, { useEffect, useState } from 'react'
import { getAllJournals, setActive, createJournal, deleteJournal, updateJournalName } from '../../../Actions'
import { Form } from 'react-bootstrap'
import './JournalSideDrawer.scss'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import JournalForm from './JournalForm'
import { MdAdd } from 'react-icons/md'

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
    activeJournal: state.activeJournal
  }
}

const mapDispatchToProps = {
  getAllJournals,
  setActive,
  createJournal,
  deleteJournal,
  updateJournalName
}

const JournalSideDrawer = ({
  journals,
  activeJournal,
  getAllJournals,
  setActive,
  showJournal,
  createJournal,
  deleteJournal,
  updateJournalName
}) => {
  // hooks
  const [newJournalInput, setNewJournalInput] = useState(false)
  useEffect(() => {
    getAllJournals()
  }, [])

  let drawerClasses = ['side-drawer']
  if (showJournal) {
    drawerClasses = ['side-drawer', 'open']
  }

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async data => {
    await createJournal(data)
    // setActive(data.journal)
    setNewJournalInput(false)
    reset()
  }

  return (
    <section className={drawerClasses.join(' ')}>
      <ul>
        <h2>Journals</h2>
        {!newJournalInput && (
          <MdAdd
            className='new-journal-button'
            onClick={() => setNewJournalInput(true)}
          />
        )}
        {newJournalInput && (
          <Form className='add-journal-form' onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Journal Name Here'
              name='journal'
              className='new-journal-input'
              ref={register}
            />
            <button type='submit'>
              <MdAdd className='add-journal-button' />
            </button>
          </Form>
        )}
        {journals.map((journal) => (
          <JournalForm journal={journal} />))}
      </ul>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalSideDrawer)
