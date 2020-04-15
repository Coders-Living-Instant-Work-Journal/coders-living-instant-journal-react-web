import { configureStore } from '@reduxjs/toolkit'

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

export default store
