import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEntries } from '../../Actions/index';
import { Container} from 'react-bootstrap';

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
        


      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
