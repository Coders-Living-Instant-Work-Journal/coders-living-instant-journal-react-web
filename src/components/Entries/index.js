import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEntries } from '../../Actions/index';
import { Row, Col, Container } from 'react-bootstrap';

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
        {entries.map((entry, index) => (
          <>
            <Row className='entry-headers' key={entry._id} >
              <Col key={entry._id + 1}>{entry.date}</Col>
              <Col key={entry._id + 2}>{entry.category}</Col>
            </Row>
            <Row>
              <Col className='entry-text' key={entry._id + 3}>{entry.text}</Col>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
