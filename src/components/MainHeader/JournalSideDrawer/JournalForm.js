import React, { useState } from 'react'
import { setActive, deleteJournal, updateJournalName } from '../../../Actions'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { TiDelete } from 'react-icons/ti'
import { MdEdit, MdAdd } from 'react-icons/md'
import './JournalSideDrawer.scss'



const mapStateToProps = (state) => {
    return {
        // journals: state.journals,
        activeJournal: state.activeJournal
    }
}

const mapDispatchToProps = {
    // getAllJournals,
    setActive,
    // createJournal,
    deleteJournal,
    updateJournalName
}


const JournalForm = ({
    // journals,
    journal,
    activeJournal,
    // createJournal,
    deleteJournal,
    updateJournalName
}) => {

    const { register, handleSubmit, reset } = useForm()
    
    const [updateJournalInput, setUpdateJournalInput] = useState(false)

    const onUpdate = async data => {
        console.log('upate', data)
        await updateJournalName(data)
        setActive(data.journal)
        setUpdateJournalInput(false)
        reset()
    }

    return (
        <li
            key={journal._id}
            onClick={() => {
                setActive(activeJournal === journal.name ? '' : journal.name)
            }}
        >
            {!updateJournalInput && (
                <button onClick={() => setUpdateJournalInput(true)}>
                    <MdEdit className='update-journal-button' />
                </button>
            )}
            {updateJournalInput && (
                <Form className='update-journal-form' onSubmit={handleSubmit(onUpdate)}>
                    <Form.Control
                        size='sm'
                        type='text'
                        placeholder='New Journal Name Here'
                        name={journal._id}
                        className='update-journal-input'
                        ref={register} />
                    <button type='submit'>
                        <MdAdd className='add-journal-button' />
                    </button>
                </Form>
            )}
            {' '}
            {journal.name}{' '}

            <button onClick={() => deleteJournal(journal)}><TiDelete
                className='delete-journal-button'
            /> </button>
        </li>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalForm)
