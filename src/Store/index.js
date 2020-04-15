import { configureStore } from '@reduxjs/toolkit'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

import journalReducer from '../Reducers/journalReducers'
import activeJournalReducer from '../Reducers/activeJournalReducers'
import loginReducer from '../Reducers/loginReducers'
import entriesReducer from '../Reducers/entriesReducers'

const store = configureStore({
  reducer: {
    journalReducer,
    activeJournalReducer,
    loginReducer,
    entriesReducer
  }
})

// const store = () => {
//     return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// }

export default store
