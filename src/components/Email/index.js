import React from 'react';
import { Form } from 'react-bootstrap';


export default function Email () {
    return (
        <>
        <h2>Email Settings</h2>
        <Form>
            <Form.Label>Select Journal:</Form.Label>
            <Form.Control as="Select">
                {/* map over journal options */}
                <option></option>
            </Form.Control>

            <Form.Label>Select Category:</Form.Label>
            <Form.Control as="Select">
                {/* map over categories options and include a all categories option */}
                <option></option>
            </Form.Control>

            <Form.Label>Frequency of emails</Form.Label>
            <Form.Control as="Select">
                {/* map over categories options and include a all categories option */}
                <option></option>
            </Form.Control>
            
            <Form.Control type="text" placeholder="Please enter email you'd like to recieve notes at" />
            </Form>
            </>
    )
};

