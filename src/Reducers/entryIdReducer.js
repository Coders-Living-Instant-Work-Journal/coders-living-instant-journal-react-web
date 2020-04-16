const entryIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'PASS_ENTRY_ID':
      return action.payload
    default:
      return state
  }
}

export default entryIdReducer
