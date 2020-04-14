import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllEntries } from "../../Actions";
import { Row, Col, Container } from "react-bootstrap";

import "./Entries.scss";

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

const mapDispatchToProps = {
  getAllEntries,
};

const Entries = ({ entries, getAllEntries }) => {
  const entriesFetcher = () => {
    getAllEntries();
  };

  useEffect(() => entriesFetcher(), []);

  return (
    <>
      <h1 className="title">Your Journal Entries</h1>

      <Container>
        {entries.map((entry) => (
          <>
            <Row className="entry-headers">
              <Col>{entry.date}</Col>
              <Col>{entry.category}</Col>
            </Row>
            <Row>
              <Col className="entry-text">{entry.text}</Col>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
