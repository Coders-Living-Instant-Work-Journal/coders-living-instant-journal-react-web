import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getAllEntries, createEntry } from "../../Actions/index";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import "./NewEntry.scss";
const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

const mapDispatchToProps = {
  getAllEntries,
};

const NewEntry = ({ entries, getAllEntries }) => {
  const { register, handleSubmit, reset } = useForm();
  let message='';
  const onSubmit = async (data) => {
    message = await createEntry(data);
    reset();
  };

  const entriesFetcher = () => {
    getAllEntries();
  };
  // eslint-disable-next-line
  useEffect(() => entriesFetcher(), []);
  return (
    <>
      <div className="save-state">{message}</div>
      <Form className="entry-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="controlSelect1">
          <Form.Label>Category</Form.Label>

          <Form.Control as="select" name="category" ref={register}>
            {entries.map((entry) => (
              <option value={entry.category}>{entry.category}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="controlTextarea1">
          <Form.Label>Entry Text</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Start your entry here..."
            name="textarea"
            ref={register}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);
