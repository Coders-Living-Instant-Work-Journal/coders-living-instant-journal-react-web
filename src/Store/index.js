import { configureStore } from '@reduxjs/toolkit'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

import journalReducer from '../Reducers/journalReducers'
import activeJournalReducer from '../Reducers/activeJournalReducers';
import loginReducer from '../Reducers/loginReducers'

const store = configureStore({
    reducer: {
        journalReducer,
        activeJournalReducer,
        loginReducer
    }
})

// const store = () => {
//     return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// }


export default store