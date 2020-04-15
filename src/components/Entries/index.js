import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEntries } from '../../Actions/index';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

import './Entries.scss';

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

const mapDispatchToProps = {
  getAllEntries,
};

const Entries = ({ entries, getAllEntries }) => {

  // eslint-disable-next-line
  useEffect(getAllEntries, []);

  return (
    <>
      <h1 className='title'>Your Journal Entries</h1>

      <Container>
        {/* {entries.map((entry, index) => ( */}
        {/* // <>
          //   <Row className='entry-headers' key={entry._id} >
          //     <Col key={entry._id + 1}>{entry.date}</Col>
          //     <Col key={entry._id + 2}>{entry.category}</Col>
          //   </Row>
          //   <Row>
          //     <Col className='entry-text' key={entry._id + 3}>{entry.text}</Col>
          //   </Row>
          // </> */}


        <>

          {/* <LinkContainer to="/journal-details">
            <Nav.Link > */}
          <Link to='entry-details'
          <Row className='entry-headers' key={1} >
            <Col key={2}>4/15/2020</Col>
          <Col key={3}>Sports</Col>
        </Row>
        <Row>
          <Col className='entry-text' key={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
        </Row>
        {/* </Nav.Link>
          </LinkContainer> */}
        </>
      {/* ))} */}
    </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
