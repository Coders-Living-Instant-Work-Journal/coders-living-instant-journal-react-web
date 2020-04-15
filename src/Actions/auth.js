// Auth related actions

export function userLogIn (loggedIn) {
  return {
    type: 'SET_LOGGED_IN'
  }
}

// export function userOAuthLogin() {
//   return async function (dispatch) {
//       const raw = await fetch('http://localhost:3003/signin', {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//     dispatch(userLogIn())
//   }
// }
