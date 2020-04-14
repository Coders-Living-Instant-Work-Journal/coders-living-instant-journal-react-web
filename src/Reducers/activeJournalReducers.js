const activeJournalReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return action.payload;
    default:
      return state;
  }
};

export default activeJournalReducer;
