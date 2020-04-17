import { connect } from 'react-redux'
import React from 'react'
import { Button } from 'react-bootstrap'

import {githubOptions, googleOptions, githubUrl, googleUrl} from '../../config/config'

import cookie from 'react-cookies'

import * as authActions from '../../Actions/auth'

import './login.scss'

// images
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import google from '../../assets/google.png'
// import { Link } from 'react-bootstrap/lib/Navbar';

const githubLogin = () => {
  const URL = githubUrl
  const options = githubOptions

  const queryString = Object.keys(options).map(key => {
    return `${key}=${encodeURIComponent(options[key])}`
  }).join('&')

  const authURL = `${URL}?${queryString}`
  return authURL
}

const googleLogin = () => {
  const URL = googleUrl
  const options = googleOptions

  const queryString = Object.keys(options).map(key => {
    return `${key}=${encodeURIComponent(options[key])}`
  }).join('&')

  const authURL = `${URL}?${queryString}`
  return authURL
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn
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
