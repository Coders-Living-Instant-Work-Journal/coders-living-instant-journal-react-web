import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getAllEntries } from '../../Actions/index';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

const mapDispatchToProps = {
  getAllEntries,
};



const NewEntry = ({ entries, getAllEntries }) => {

  const entriesFetcher = () => {
    getAllEntries();
  };
// eslint-disable-next-line
  useEffect(() => entriesFetcher(), []);
  return (
    <>
      <Form>
        <Form.Group controlId="controlSelect1">
          <Form.Label>Category</Form.Label>

          <Form.Control as="select">
            {entries.map((entry) => (
              < option >{entry.category}</option>
            ))}

          </Form.Control>
        </Form.Group>

        <Form.Group controlId="controlTextarea1">
          <Form.Label>Entry Text</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);
