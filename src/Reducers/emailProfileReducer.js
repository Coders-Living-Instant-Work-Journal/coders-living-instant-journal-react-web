export default function emailProfileReducer (state = [], action) {
  console.log('action payload', action.payload, action.type)
  switch (action.type) {
    case 'CREATE_EMAIL_PROFILE':
      return [...state, action.payload]
    case 'UPDATE_EMAIL_PROFILE':
      return state.map(profile => {
        if (profile._id === action.payload._id) {
          return { ...action.payload }
        } else {
          return { ...profile }
        }
      })
    case 'GET_EMAIL_PROFILE':
      return [...action.payload]
    case 'DELETE_EMAIL_PROFILE':
      return [...state.filter(profile => profile._id !== action.payload._id)]
    default: {
      return state
    }
  }
}
