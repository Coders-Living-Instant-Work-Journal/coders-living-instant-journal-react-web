import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import journalReducer from '../Reducers/journalReducers'
import activeJournalReducer from '../Reducers/activeJournalReducers';

const reducers = combineReducers({
    journals: journalReducer,
    activeJournal: activeJournalReducer
})

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}


export default store()