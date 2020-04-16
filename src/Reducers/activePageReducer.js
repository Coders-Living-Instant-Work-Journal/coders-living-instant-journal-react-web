export const Pages = {
  HOME: 'HOME',
  NEW_ENTRY: 'NEW_ENTRY',
  ENTRY_DETAILS: 'ENTRY_DETAILS'
}

const activePageReducer = (state = Pages.HOME, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return Pages[action.payload]
    default:
      return state
  }
}

export default activePageReducer
