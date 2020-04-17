
// const initialState = { journals: []}

const journalReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_JOURNALS':
      return [...action.payload]
    default:
      return state
  }
}

export default journalReducer
