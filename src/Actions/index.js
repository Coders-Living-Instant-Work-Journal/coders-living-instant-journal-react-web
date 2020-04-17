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

export function setActive(journal) {
  return async function (dispatch) {
    await selectJournal(journal)
    return dispatch(setActiveAction(journal))
  }
}

const setActiveAction = (journal) => ({
  type: 'SET_ACTIVE',
  payload: journal
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
    console.log('entries data', data)
    if (data.body[0] === 'No entries found.') {
      return dispatch(getAllEntriesAction([]))
    }
    return dispatch(getAllEntriesAction(data.body))
  }
}

function getAllEntriesAction(entries) {
  return {
    type: 'GET_ALL_ENTRIES',
    payload: entries
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
    const data = await putApi(entry)
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
  console.log({ id: Object.keys(journal)[0], name: Object.values(journal)[0] })
  return async function (dispatch) {
    await updateJournalApi({ id: Object.keys(journal)[0], name: Object.values(journal)[0] })
    const data = await getJournals()
    return dispatch(getAllJournalsAction(data))
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
  console.log('journal', journal)
  return async function (dispatch) {
    const defaultJournal = await deleteJournalApi(journal)
    const data = await getJournals()
    return dispatch(getAllJournalsAction(data))
  }
}
