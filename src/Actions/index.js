import {
  getEntries,
  getJournals,
  updateJournalApi,
  selectJournal,
  createEntryApi,
  deleteJournalApi,
  saveJournalApi,
  putApi,
  deleteEntryApi
} from './api'

export const setActive = (name) => ({
  type: 'SET_ACTIVE',
  payload: name
})

// CREATE NEW ENTRY
export function createEntry(entry) {
  return async function (dispatch) {
    const data = await createEntryApi(entry)
    return dispatch(createEntryAction(data))
  }
}

function createEntryAction(data) {
  return {
    type: 'CREATE_ENTRY',
    payload: data.body
  }
}

// GET ALL ENTRIES
export function getAllEntries() {
  return async function (dispatch) {
    const data = await getEntries()
    return dispatch(getAllEntriesAction(data))
  }
}

function getAllEntriesAction(data) {
  return {
    type: 'GET_ALL_ENTRIES',
    payload: data.body
  }
}

// GET ONE ENTRY
export function getOneEntry(id) {

  return async function (dispatch) {
    console.log('one entry id', id)
    const data = await getEntries(id)
    return dispatch(getOneEntryAction(data))
  }
}

function getOneEntryAction(data) {

  return {
    type: 'GET_ONE_ENTRY',
    payload: data.body
  }
}

// UPDATES AN ENTRY
export function updateEntry(entry) {
  return async function (dispatch) {
    console.log('update entry call')
    const data = await putApi(entry)
    console.log('update entry data', data)
    return dispatch(updateEntryAction(data))
  }
}

function updateEntryAction(data) {
  return {
    type: 'UPDATE_ENTRY',
    payload: data.body
  }
}

// DELETES AN ENTRY
export function deleteEntry(id) {
  return async function (dispatch) {
    await deleteEntryApi(id)
    return dispatch(deleteEntryAction(id))
  }
}

function deleteEntryAction(id) {
  return {
    type: 'DELETE_ENTRY',
    payload: id
  }
}

// CREATE A NEW JOURNAL
export function createJournal(journal) {
  return async function (dispatch) {
    await saveJournalApi(journal.journal)
    const data = await getJournals()
    return dispatch(getAllJournalsAction(data))
  }
}

// GETS ALL JOURNALS
export function getAllJournals() {
  return async function (dispatch) {
    const data = await getJournals()
    return dispatch(getAllJournalsAction(data))
  }
}

function getAllJournalsAction(data) {
  return {
    type: 'GET_ALL_JOURNALS',
    payload: data.body
  }
}

// CHANGE JOURNAL NAME
export function updateJournalName(journal) {
  return async function (dispatch) {
    const data = await updateJournalApi(journal)
    return dispatch(updateJournalNameAction(data))
  }
}

function updateJournalNameAction(data) {
  return {
    type: 'UPDATE_JOURNAL',
    payload: data.body
  }
}

// CHANGE DEFAULT JOURNAL
export function changeDefaultJournal(journal) {
  return async function (dispatch) {
    const data = await selectJournal(journal)
    return dispatch(changeDefaultJournalAction(data))
  }
}

function changeDefaultJournalAction(data) {
  return {
    type: 'CHANGE_DEFAULT_JOURNAL',
    payload: data.body
  }
}

// DELETE JOURNAL
export function deleteJournal(journal) {
  return async function (dispatch) {
    const data = await deleteJournalApi(journal)
    return dispatch(deleteJournalApiAction(data))
  }
}

function deleteJournalApiAction(data) {
  return {
    type: 'DELETE_JOURNAL',
    payload: data.body
  }
}
