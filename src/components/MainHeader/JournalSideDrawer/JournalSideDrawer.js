import React, { useEffect, useState } from 'react'
import { getAllJournals, setActive, createJournal } from '../../../Actions'
import { Form } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'
import { MdEdit, MdAdd } from 'react-icons/md'
import './JournalSideDrawer.scss'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
    activeJournal: state.activeJournal
  }
}

const mapDispatchToProps = {
  getAllJournals,
  setActive,
  createJournal
}

const JournalSideDrawer = ({
  journals,
  activeJournal,
  getAllJournals,
  setActive,
  showJournal,
  createJournal
}) => {
  // hooks
  const [newJournalInput, setNewJournalInput] = useState(true)

  let drawerClasses = ['side-drawer']
  if (showJournal) {
    drawerClasses = ['side-drawer', 'open']
  }

  const journalFetcher = () => {
    getAllJournals()
  }
  // eslint-disable-next-line
  useEffect(() => journalFetcher(), []);

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async data => {
    await createJournal(data)
    setActive(data.journal)
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
        {journals.map((journal, index) => (
          <li
            key={index}
            onClick={() => {
              setActive(activeJournal === journal.name ? '' : journal.name)
            }}
          >
            {' '}
            {journal.name}{' '}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalSideDrawer)
