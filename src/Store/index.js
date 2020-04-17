import { configureStore } from '@reduxjs/toolkit'

import journals from '../Reducers/journalReducers'
import activeJournal from '../Reducers/activeJournalReducers'
import login from '../Reducers/loginReducers'
import entries from '../Reducers/entriesReducers'
import activePage from '../Reducers/activePageReducer'
import entryId from '../Reducers/entryIdReducer'
import emailProfiles from '../Reducers/emailProfileReducer'

const store = configureStore({
  reducer: {
    emailProfiles,
    activePage,
    journals,
    activeJournal,
    login,
    entries,
    entryId
  }
})

export default store
