import React from 'react'
import './MainFooter.scss'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { IoIosPaper } from 'react-icons/io'
import { changePage } from '../../Actions/pages'

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage
  }
}

const mapDispatchToProps = {
  changePage
}

const MainFooter = ({ changePage, activePage }) => {
  return (
    <footer className='footer'>
      <Nav className='justify-content-center' activeKey='/home'>

        <Nav.Item>
          <IoIosPaper />

          <Nav.Link onClick={() => { changePage('NEW_ENTRY') }}>Add Entry</Nav.Link>

        </Nav.Item>
      </Nav>
    </footer>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)
