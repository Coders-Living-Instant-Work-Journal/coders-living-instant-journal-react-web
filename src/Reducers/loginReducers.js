const initialState = { loggedIn: false }

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_LOGGED_IN':
          return { loggedIn: true }
      default:
          return state
  }
}

export default loginReducer;