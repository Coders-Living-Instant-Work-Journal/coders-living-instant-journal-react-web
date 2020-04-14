import { connect } from "react-redux"
import React from 'react'
import { Button } from 'react-bootstrap'

import * as actions from '../../Actions/'

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
}


const Login = ({ loggedIn, children }) => {
  console.log('Login',loggedIn)
  const LoginPage = (
    <Button className="Form" onClick={!loggedIn}>Log In</Button>
  )
  if (loggedIn) {
    return children
  } else {
    return LoginPage
  }

}

// if not logged show login screen


// if logged in show children

export default connect(mapStateToProps)(Login)