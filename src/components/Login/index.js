import { connect } from 'react-redux'
import React from 'react'
import { Button } from 'react-bootstrap'

import cookie from 'react-cookies'

import * as authActions from '../../Actions/auth'

import './login.scss'

// images
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import google from '../../assets/google.png'
// import { Link } from 'react-bootstrap/lib/Navbar';

const githubLogin = () => {
  const URL = 'https://github.com/login/oauth/authorize'
  const options = {
    client_id: '631f20f7051b78aa521c',
    redirect_uri: 'http://localhost:3000/gitHubOAuth',
    scope: '',
    state: 'thisIsMyState'
  }

  const queryString = Object.keys(options).map(key => {
    return `${key}=${encodeURIComponent(options[key])}`
  }).join('&')

  const authURL = `${URL}?${queryString}`
  return authURL
}

const TOKEN_SERVER_URL = 'https://oauth2.googleapis.com/token'
const CLIENT_ID = '658078245679-9challjqn1drnapsmb4q2n27amg1u5sm.apps.googleusercontent.com'
const API_SERVER = 'http://localhost:3000/oauth'

const googleLogin = () => {
  const URL = TOKEN_SERVER_URL
  const options = {
    client_id: CLIENT_ID,
    redirect_uri: API_SERVER,
    scope: '',
    state: 'thisIsMyState'
  }

  const queryString = Object.keys(options).map(key => {
    return `${key}=${encodeURIComponent(options[key])}`
  }).join('&')

  const authURL = `${URL}?${queryString}`
  return authURL
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginReducer.loggedIn
  }
}

const mapDispatchToProps = {
  login: authActions.userLogIn
}

// superagent.post('http://localhost:3000/testroute').set(‘authorization’, `bearer ${token}`);

const Login = ({ loggedIn, login, children }) => {
  const token = cookie.load('Auth-Token')

  const LoginPage = (
    <>
      <header>
        <nav className='homebar'>
          <div>
            <a href='/'>
              <img className='homelogo' src={logo} alt='Logo' />
            </a>
          </div>
          <div>Why CLIJ?</div>
          <div>About</div>
        </nav>
      </header>
      <body>
        <div className='login'>
          <Button onClick={login}>skip oauth</Button>
          <a href={githubLogin()}>
            <img
              className='github'
              src={github}
              alt='github login'
            />
          </a>
          <a href={googleLogin()}>
            <img
              onClick={login}
              className='google'
              src={google}
              alt='google'
            />
          </a>
        </div>
      </body>
    </>
  )

  if (token !== undefined) loggedIn = true

  if (loggedIn) {
    return children
  } else {
    return LoginPage
  }
}

// if not logged show login screen

// if logged in show children

export default connect(mapStateToProps, mapDispatchToProps)(Login)
