import { configureStore } from '@reduxjs/toolkit'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

import journals from '../Reducers/journalReducers'
import activeJournal from '../Reducers/activeJournalReducers'
import login from '../Reducers/loginReducers'
import entries from '../Reducers/entriesReducers'

const store = configureStore({
  reducer: {
    journals,
    activeJournal,
    login,
    entries
  }
})

// const store = () => {
//     return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// }

export default store
