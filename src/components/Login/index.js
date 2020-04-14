import { connect } from "react-redux"
import React from 'react'
import { Button } from 'react-bootstrap'

import * as authActions from '../../Actions/auth'

import './login.scss'

//images
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import google from '../../assets/google.png'

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
}
const mapDispatchToProps = { 
  login: authActions.userLogIn
};


const Login = ({ loggedIn, login, children }) => {

  const LoginPage = (
    <>
    <header>
      <nav className="homebar">
        <div>  
          <a href="/"><img className="homelogo" src={logo} alt="Logo" /></a>
        </div>
        <div>Why CLIJ?</div>
        <div>About</div>
      </nav>
    </header>
    <body>
      <div className="login">
        <Button onClick={login}>Log In</Button>
        <img onClick={login} className="github" src={github} alt="github"></img>
        <img onClick={login} className="google" src={google} alt="google"></img>
      </div>
    </body>
    </>
  )

  if (loggedIn) {
    return children
  } else {
    return LoginPage
  }

}

// if not logged show login screen


// if logged in show children

export default connect(mapStateToProps, mapDispatchToProps)(Login)