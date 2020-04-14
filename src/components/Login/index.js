import { connect } from "react-redux"
import React from 'react'
import { Button } from 'react-bootstrap'

import * as authActions from '../../Actions/auth'

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
}
const mapDispatchToProps = { 
  login: authActions.userLogIn
};


const Login = ({ loggedIn, login, children }) => {
  console.log('Login',loggedIn)
  const LoginPage = (
    <Button className="Form" onClick={login}>Log In</Button>
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