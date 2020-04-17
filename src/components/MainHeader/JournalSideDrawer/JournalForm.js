import React, { useState } from 'react'
import { setActive, deleteJournal, updateJournalName, getAllEntries } from '../../../Actions'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { TiDelete } from 'react-icons/ti'
import { MdEdit, MdAdd } from 'react-icons/md'
import './JournalSideDrawer.scss'

const mapStateToProps = (state) => {
  return {
    // journals: state.journals,
    activeJournalId: state.activeJournal.id
  }
}

const mapDispatchToProps = {
  // getAllJournals,
  setActive,
  // createJournal,
  deleteJournal,
  updateJournalName,
  getAllEntries
}

const JournalForm = ({
  // journals,
  journal,
  activeJournalId,
  setActive,
  deleteJournal,
  updateJournalName,
  getAllEntries
}) => {
  const { register, handleSubmit, reset } = useForm()

  const [updateJournalInput, setUpdateJournalInput] = useState(false)

  const onUpdate = async data => {
    await updateJournalName(data)
    // setActive(journal._id)

    setUpdateJournalInput(false)
    reset()
  }

  return (
    <li
      key={journal._id}

    >
      {!updateJournalInput && (
        <button onClick={() => setUpdateJournalInput(true)}>
          <MdEdit className='update-journal-button' />
        </button>
      )}
      {
        updateJournalInput && (
          <Form className='update-journal-form' onSubmit={handleSubmit(onUpdate)}>
            <Form.Control
              size='sm'
              type='text'
              placeholder='New Journal Name Here'
              name={journal._id}
              className='update-journal-input'
              ref={register}
            />
            <button type='submit'>
              <MdAdd className='add-journal-button' />
            </button>
          </Form>
        )
      }
      <div
        className='journal-name' key={journal._id} onClick={async () => {
          await setActive(journal)
          await getAllEntries()
        }}
      >
        {' '}
        {journal.name} {' '}
      </div>
      <button onClick={async () => {
        await deleteJournal(journal)
        await getAllEntries()
      }}
      >
        <TiDelete
          className='delete-journal-button'
        />
      </button>
    </li>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalForm)
