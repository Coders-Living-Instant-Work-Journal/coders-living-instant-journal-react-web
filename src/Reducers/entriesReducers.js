const entriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_ENTRIES':
      return [...state, ...action.payload]
    case 'GET_ONE_ENTRY':
      return action.payload
    case 'DELETE_ENTRY':
      return state.filter(entry => entry._id !== action.payload)
    case 'UPDATE_ENTRY':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default entriesReducer
