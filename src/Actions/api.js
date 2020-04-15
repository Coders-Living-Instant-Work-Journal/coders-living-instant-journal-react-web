import superagent from 'superagent'
const storeToken = () => 'token';
const findToken = () => '1';


const oauthHandler = () => 'original oauth flow fix later';
// const jwt = 0;
//constants
// const API_SERVER_URI = 'https://clij.herokuapp.com'
const API_SERVER_URI = "http://localhost:3005";


//functions
// ----- SEND NEW USER SIGN UP TO API

async function exchangeToken(credentials) {
  const response = await superagent.post(`${API_SERVER_URI}/authenticate`)
    .send(credentials)
  if (response.body.token) {
    // this is where we will get Token from local storage
    storeToken(response.body.token);
    return true
  } else {
    return false
  }
}
async function signUpOauth(provider) {
  //complete the oauth handshake with the provider.
  await oauthHandler.start(provider)
  oauthHandler.close();
  //get the credentials from the fs
  const raw = await findToken('oauth')
  const credentials = JSON.parse(raw)
  return credentials
}
// ----- SENDS NEW JOURNAL TO API
async function saveJournalApi(journal) {
  return superagent
    .post(`${API_SERVER_URI}/createj`)
    .set("Authorization", findToken())
    .send({ name: journal })
    .catch((err) => console.error(err));
}
// retrieves journals from API
async function getJournals() {
  return superagent
    .get(`${API_SERVER_URI}/readj`)
    .set("Authorization", findToken())
    .catch((err) => console.error(err.message));
}

// UPDATES AN ENTRY
async function putApi(entry) {
  return superagent
    .put(`${API_SERVER_URI}/update`)
    .set("Authorization", findToken())
    .send(entry)
    .catch((err) => console.error(err.message));
}
// DELETE
async function deleteEntryApi(id) {
  return superagent
    .delete(`${API_SERVER_URI}/delete`)
    .set("Authorization", findToken())
    .send(id)
    .catch((err) => console.error(err.message));
}
// ----- DISPLAY ALL or AFTER FILTERING BY CATERGORY, DATE, or BOTH - queries api by filter
async function getEntries(filter) {
  try {
    return superagent
      .get(`${API_SERVER_URI}/read`)
      .set("Authorization", findToken())
      .send(filter)
  } catch (e) {
    console.error(e)
  }
}
// QUERIES API TO UPDATE JOURNAL NAME
async function updateJournalApi(journal, name) {
  return superagent
    .put(`${API_SERVER_URI}/updatej`)
    .set("Authorization", findToken())
    .send({ id: journal._id, name: name })
    .catch((err) => console.error(err.message));
}
// QUERIES API TO CHANGE DEFAULT JOURNAL
async function selectJournal(journal) {
  await superagent
    .post(`${API_SERVER_URI}/selectj`)
    .set("Authorization", findToken())
    .send({ jId: journal._id, name: journal.name })
    .catch((err) => console.error(err.message));
}
// CRUD FUNCTIONS
async function createEntryApi(entry) {
  return superagent
    .post(`${API_SERVER_URI}/create`)
    .set("Authorization", findToken())
    .send(entry)
    .catch((err) => console.error(err.message));
}
// DELETES JOURNAL
async function deleteJournalApi(journal) {
  superagent
    .delete(`${API_SERVER_URI}/deletej`)
    .set("Authorization", findToken())
    .send({ id: journal._id })
    .catch((err) => console.log(err.message));
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
  saveJournalApi,
  signUpOauth,
  exchangeToken,
};