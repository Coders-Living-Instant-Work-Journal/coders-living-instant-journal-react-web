export const API_SERVER_URI = 'http://localhost:3000'
// export const API_SERVER_URI = 'https://clij.herokuapp.com'



export const githubOptions = {
  client_id: '631f20f7051b78aa521c',
  redirect_uri: 'http://localhost:3000/gitHubOAuth',
  scope: '',
  state: 'thisIsMyState'
  
  // client_id: '4ff7829c02732951c59f',
  // redirect_uri: 'https://clij.herokuapp.com/gitHubOAuth',
  // state: 'SDaNtVYCIqZvrqU3OeG44IDr2KD4LhDA1xhzbz3YuuMZMhVEWcZV29tPKWeEePDYi9hUvVk2',
}

export const githubUrl = 'https://github.com/login/oauth/authorize'








export const googleOptions = {
  client_id: '658078245679-9challjqn1drnapsmb4q2n27amg1u5sm.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3000/oauth',
    // redirect_uri: 'https://clij.herokuapp.com/oauth',
    scope: '',
}

export const googleUrl = 'https://oauth2.googleapis.com/token'


