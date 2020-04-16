import superagent from 'superagent'
import cookie from 'react-cookies'

const storeToken = () => 'token'
const token = cookie.load('Auth-Token')

const oauthHandler = () => 'original oauth flow fix later'
// const jwt = 0;
// constants

const API_SERVER_URI = 'https://clij.herokuapp.com'

// functions
// ----- SENDS NEW JOURNAL TO API
async function saveJournalApi(journal) {
  return superagent
    .post(`${API_SERVER_URI}/createj`)
    .set('Authorization', token)
    .send({ name: journal })
    .catch((err) => console.error(err))
}
// retrieves journals from API
async function getJournals() {
  return superagent
    .get(`${API_SERVER_URI}/readj`)
    .set('Authorization', token)
    .catch((err) => console.error(err.message))
}

// UPDATES AN ENTRY
async function putApi(entry) {
  return superagent

    .put(`${API_SERVER_URI}/update`)
    .set('Authorization', token)
    .send(entry)
    .catch((err) => console.error(err.message))
}
// DELETE
async function deleteEntryApi(id) {
  console.log('delete entry id', id)
  return superagent

    .delete(`${API_SERVER_URI}/delete`)
    .set('Authorization', token)
    .send({ id: id })
    .catch((err) => console.error(err.message))
}
// ----- DISPLAY ALL or AFTER FILTERING BY CATERGORY, DATE, or BOTH - queries api by filter
async function getEntries(filter) {
  try {
    return superagent
      .get(`${API_SERVER_URI}/read`)
      .set('Authorization', token)
      .send(filter)
  } catch (e) {
    console.error(e)
  }
}
// QUERIES API TO UPDATE JOURNAL NAME
async function updateJournalApi(journal) {
  return superagent
    .put(`${API_SERVER_URI}/updatej`)
    .set('Authorization', token)
    .send(journal)
    .catch((err) => console.error(err.message))
}
// QUERIES API TO CHANGE DEFAULT JOURNAL
async function selectJournal(journal) {
  await superagent
    .post(`${API_SERVER_URI}/selectj`)
    .set('Authorization', token)
    .send({ jId: journal._id, name: journal.name })
    .catch((err) => console.error(err.message))
}
// CRUD FUNCTIONS
async function createEntryApi(entry) {
  return superagent

    .post(`${API_SERVER_URI}/create`)
    .set('Authorization', token)
    .send(entry)
    .catch((err) => console.error(err.message))
}
// DELETES JOURNAL
async function deleteJournalApi(journal) {
  superagent
    .delete(`${API_SERVER_URI}/deletej`)
    .set('Authorization', token)
    .send({ id: journal._id })
    .catch((err) => console.log(err.message))
}
export {

  getJournals,
  updateJournalApi,
  deleteJournalApi,
  createEntryApi,
  selectJournal,
  getEntries,
  deleteEntryApi,
  putApi,
  saveJournalApi
}
