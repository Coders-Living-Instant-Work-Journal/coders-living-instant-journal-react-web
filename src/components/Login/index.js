import { connect } from 'react-redux';
import React from 'react';
import { Button } from 'react-bootstrap';

import cookie from 'react-cookies'

import * as authActions from '../../Actions/auth';

import './login.scss';

//images
import logo from '../../assets/logo.png';
import github from '../../assets/github.png';
import google from '../../assets/google.png';
// import { Link } from 'react-bootstrap/lib/Navbar';


const githubLogin = () => {
  const URL = 'https://github.com/login/oauth/authorize'
  const options = {
    client_id: '631f20f7051b78aa521c',
    redirect_uri: 'http://localhost:3000/gitHubOAuth',
    scope: '',
    state: 'thisIsMyState'
  }
  console.log('in githubLogin')

  const queryString = Object.keys(options).map(key => {
    return `${key}=${encodeURIComponent(options[key])}`
  }).join('&')

  const authURL = `${URL}?${queryString}`
  console.log('authURL',authURL)
  return authURL
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginReducer.loggedIn
  };
};
const mapDispatchToProps = {
  login: authActions.userLogIn
};

//superagent.post('http://localhost:3000/testroute').set(‘authorization’, `bearer ${token}`);

const Login = ({ loggedIn, login, children }) => {

  console.log('cookie',cookie.load('Github-auth'))
  const token = cookie.load('Github-auth')

  const LoginPage = (
    <>
      <header>
        <nav className="homebar">
          <div>
            <a href="/">
              <img className="homelogo" src={logo} alt="Logo" />
            </a>
          </div>
          <div>Why CLIJ?</div>
          <div>About</div>
        </nav>
      </header>
      <body>
        <div className="login">
          <Button onClick={login}>skip oauth</Button>
          <a href={githubLogin()}>
            <img
              className="github"
              src={github}
              alt="github login"
            ></img>
          </a>
          <img
            onClick={login}
            className="google"
            src={google}
            alt="google"
          ></img>
          <a href="http://localhost:3000/testroute">testroute</a>
        </div>
      </body>
    </>
  );

  if(token !== undefined) loggedIn=true

  if (loggedIn) {
    return children;
  } else {
    return LoginPage;
  }
};

// if not logged show login screen

// if logged in show children

export default connect(mapStateToProps, mapDispatchToProps)(Login);
