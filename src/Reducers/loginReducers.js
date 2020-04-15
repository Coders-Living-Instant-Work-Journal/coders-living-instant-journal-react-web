const initialState = { loggedIn: false, token: undefined }

// GITHUB

const URL = 'https://github.com/login/oauth/authorize';
const options = {
	client_id: '631f20f7051b78aa521c',
	redirect_uri: 'http://localhost:3000/gitHubOAuth',
	scope: '',
	state: 'thisIsMyState'
};

const queryString = Object.keys(options)
	.map((key) => {
		return `${key}=${encodeURIComponent(options[key])}`;
	})
	.join('&');

const authURL = `${URL}?${queryString}`;


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_LOGGED_IN':
          return { loggedIn: true }
      default:
          return state
  }
}

export default loginReducer;