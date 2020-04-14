// Auth related actions

export function userLogIn(loggedIn) {
	return {
		type: 'SET_LOGGED_IN'
	};
}

// GOOGLE

const googleLink = document.getElementById('auth');
const googleURL = 'https://accounts.google.com/o/oauth2/v2/auth';
const googleOptions = {
	client_id:
		'658078245679-9challjqn1drnapsmb4q2n27amg1u5sm.apps.googleusercontent.com',
	redirect_uri: 'http://localhost:3000/oauth',
	response_type: 'code',
	scope: 'profile email openid'
};
const googleQuery = Object.keys(googleOptions)
	.map((key) => {
		return `${key}=${encodeURIComponent(googleOptions[key])}`;
	})
	.join('&');
googleLink.setAttribute('href', `${googleURL}?${googleQuery}`);

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

const link = document.getElementById('oauth');
link.setAttribute('href', authURL);
