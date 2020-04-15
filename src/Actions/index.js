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
export async function createEntry (entry) {
  try {
    await createEntryApi(entry)
  } catch (e) {
    console.error(e);
    return 'Something went wrong.'
  }
  return 'Entry created!'
}

// function createEntryAction(data) {
//   return {
//     type: "CREATE-_ENTRY",
//     payload: data.body,
//   };
// }

// GET ALL ENTRIES
export function getAllEntries () {
  console.log('getAllentries')
  return async function (dispatch) {
    const data = await getEntries()
    return dispatch(getAllEntriesAction(data))
  }
}

function getAllEntriesAction (data) {
  return {
    type: 'GET_ALL_ENTRIES',
    payload: data.body
  }
}

// GET ONE ENTRY
export function getOneEntry (id) {
  return async function (dispatch) {
    const data = await getEntries(id)
    return dispatch(getOneEntryAction(data))
  }
}

function getOneEntryAction (data) {
  return {
    type: 'GET_ONE_ENTRY',
    payload: data.body
  }
}

// UPDATES AN ENTRY
export function updateEntry (entry) {
  return async function (dispatch) {
    const data = await putApi(entry)
    return dispatch(updateEntryAction(data))
  }
}

function updateEntryAction (data) {
  return {
    type: 'UPDATE_ENTRY',
    payload: data.body
  }
}

// DELETES AN ENTRY
export function deleteEntry (id) {
  return async function (dispatch) {
    const data = await deleteEntryApi(id)
    return dispatch(deleteEntryAction(data))
  }
}

function deleteEntryAction (data) {
  return {
    type: 'DELETE_ENTRY',
    payload: data.body
  }
}

// CREATE A NEW JOURNAL
export function createJournal (journal) {
  return async function (dispatch) {
    const data = await saveJournalApi(journal)
    return dispatch(createJournalAction(data))
  }
}

function createJournalAction (data) {
  return {
    type: 'CREATE_JOURNAL',
    payload: data.body
  }
}

// GETS ALL JOURNALS
export function getAllJournals () {
  return async function (dispatch) {
    const data = await getJournals()
    console.log('data', data.body)
    return dispatch(getAllJournalsAction(data))
  }
}

function getAllJournalsAction (data) {
  return {
    type: 'GET_ALL_JOURNALS',
    payload: data.body
  }
}

// CHANGE JOURNAL NAME
export function updateJournalName (journal) {
  return async function (dispatch) {
    const data = await updateJournalApi(journal)
    return dispatch(updateJournalNameAction(data))
  }
}

function updateJournalNameAction (data) {
  return {
    type: 'UPDATE_JOURNAL',
    payload: data.body
  }
}

// CHANGE DEFAULT JOURNAL
export function changeDefaultJournal (journal) {
  return async function (dispatch) {
    const data = await selectJournal(journal)
    return dispatch(changeDefaultJournalAction(data))
  }
}

function changeDefaultJournalAction (data) {
  return {
    type: 'CHANGE_DEFAULT_JOURNAL',
    payload: data.body
  }
}

// DELETE JOURNAL
export function deleteJournal (journal) {
  return async function (dispatch) {
    const data = await deleteJournalApi(journal)
    return dispatch(deleteJournalApiAction(data))
  }
}

function deleteJournalApiAction (data) {
  return {
    type: 'DELETE_JOURNAL',
    payload: data.body
  }
}
