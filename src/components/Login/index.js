import { connect } from 'react-redux'
import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'

import cookie from 'react-cookies'

import * as authActions from '../../Actions/auth'

import queryString from 'query-string'

import './login.scss'

// images
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import google from '../../assets/google.png'
// import { Link } from 'react-bootstrap/lib/Navbar';

const githubLogin = () => {
  const URL = 'https://github.com/login/oauth/authorize'
  const options = {
    client_id: 'cc007407f284938fff4d',
    redirect_uri: 'https://clij.herokuapp.com/gitHubOAuth',
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
const API_SERVER = 'https://clij.herokuapp.com/oauth'

const googleLogin = () => {
  const URL = TOKEN_SERVER_URL
  const options = {
    client_id: CLIENT_ID,
    redirect_uri: API_SERVER,
    // code: code,
    grant_type: 'authorization_code'
  }

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

<<<<<<< HEAD
=======

// superagent.post('http://localhost:3000/testroute').set(‘authorization’, `bearer ${token}`);

>>>>>>> 90d3b426a1ef52722e2329de365f23c57fdc97e1
const Login = ({ loggedIn, login, children }) => {
  let token
  const maybeToken = queryString.parse(window.location.search)?.token
  if (maybeToken) {
    token = maybeToken
    cookie.save('Auth-Token', token)
    window.history.replaceState(null,null,window.location.pathname)
  } else {
    token = cookie.load('Auth-Token')
  }

  const LoginPage = (
    <Container fluid>
      <Row>
        <Col className="left-side" s={12} md={9}>
          <div className="CLIJ">
          <h2>Coders Living </h2>
          <h2>Instant Journal</h2>
          </div>

          {/* <h1 className="logo-title">WELCOME</h1> */}
        {/* <section className="logo"> */}
          {/* <div>Why CLIJ?</div>
          <div>About</div> */}
          <div> 
          <a href='/'>
            <img className='homelogo' src={logo} alt='Logo' />

          </a>
          </div>
          {/* </section> */}
          <div className='log-in-prompt'>
          <p>Please Log In --></p>
        </div>
      </Col>

      {/* <header>
        <nav className='homebar'>
          <div>
            <a href='/'>
              <img className='homelogo' src={logo} alt='Logo' />
            </a>
          </div>

        </nav>
      </header> */}
        <Col sm={12} md={3} className='right-side'>
          <div className='login'>
          {/* <Button onClick={login}>skip oauth</Button> */}
          <a href={githubLogin()}>
            <img
              className='github'
              src={github}
              alt='github login'
            />
              <h3 className='login-button'>Log In</h3>
            </a>
              

          {/* <a href={googleLogin()}>
            <img
              onClick={login}
              className='google'
              src={google}
              alt='google'
            />
          </a> */}
        </div>
      </Col>

      </Row>
      </Container>

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
