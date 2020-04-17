import React, { useState } from 'react';
import { Form, Dropdown, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createEmailProfile, updateEmailProfile } from '../../../Actions/emailProfiles';
import { useForm } from 'react-hook-form';

const CreateProfile = ({ create, viewChange, views, journals, currentDetail, profiles, update }) => {
  const initialState = currentDetail ? {defaultValues: currentDetail} : undefined
  console.log('the defaults on component render: ', initialState)

  const { register, handleSubmit, reset } = useForm(/*initialState*/);
  const [frequency, setFrequency] = useState();

  const freqOptions = ['daily', 'weekly', 'bi-weekly', 'monthly'];

  const createHandler = (data) => {
    console.log(data);
    create(constructProfileObj(data))
    // try {

    //   if (profiles.find(profile => profile._id === currentDetail._id)) {
    //     update(constructProfileObj(data))
    //   } else {
    //     create(constructProfileObj(data));
    //   }
    // } catch (er) {
    //   console.log(er)
    // } finally {
      viewChange(views.EMAIL);
      reset(); 
    // }
  };

  const Hours = {
    '12 AM': 0,
    '1 AM': 1,
    '2 AM': 2,
    '3 AM': 3,
    '4 AM': 4,
    '5 AM': 5,
    '6 AM': 6,
    '7 AM': 7,
    '8 AM': 8,
    '9 AM': 9,
    '10 AM': 10,
    '11 AM': 11,
    '12 PM': 12,
    '1 PM': 13,
    '2 PM': 14,
    '3 PM': 15,
    '4 PM': 16,
    '5 PM': 17,
    '6 PM': 18,
    '7 PM': 19,
    '8 PM': 20,
    '9 PM': 21,
    '10 PM': 22,
    '11 PM': 23,
  }



  function constructProfileObj(data) {
    const frequencyOptions = {
      weekly: {
        biWeekly: false,
        monthly: false,
        thisWeek: false,
        entryRange: 7,
        emailDay: [parseInt(data.emailDay)] || null,
      },
      daily: {
        biWeekly: false,
        monthly: false,
        thisWeek: false,
        entryRange: 1,
        emailDay: [0, 1, 2, 3, 4, 5, 6],
      },
      'bi-weekly': {
        biWeekly: true,
        monthly: false,
        entryRange: 14,
        thisWeek: data.thisWeek || false,
        emailDay: [parseInt(data.emailDay)] || null,
      },
      monthly: {
        biWeekly: false,
        monthly: true,
        thisWeek: false,
        entryRange: 31,
        emailDay: [0, 1, 2, 3, 4, 5, 6],
        dayOfMonth: [parseInt(data.dayOfMonth)] || null,
      },
    };
    const returnObj = {
      ...data,
      ...frequencyOptions[data.frequency],
      emailTime: `${data.hour}:${data.minute}`,
    };

    console.log('final object', returnObj);
    return returnObj;
  }

  return (
    <Form size="sm" onSubmit={handleSubmit(createHandler)}>
      <Form.Control ref={register} name="profileName" placeholder="Name" required/>
      <Form.Control ref={register} name="category" placeholder="Category" required/>
      <Form.Control ref={register} name="emailAddr" placeholder="Email" required/>
      <Form.Label>Journal</Form.Label>
      <Form.Control as="select" ref={register} name="journalId">
        {journals.map((journal, i) => {
          return (
            <option key={i} value={journal._id}>
              {journal.name}
            </option>
          );
        })}
      </Form.Control>
      <Form.Row>
        <Col>
          <Form.Control as="select" ref={register} name="hour">
            {Object.keys(Hours).map((time) => {
              return <option key={time} value={Hours[time]}>{time}</option>
            })}
          </Form.Control> 
        </Col>
        <Col>
          <Form.Control as="select" ref={register} name="minute">
            {[0,15,30,45].map((time, i) => {
              return <option key={i} value={time}>{time}</option>
            })}
          </Form.Control> 
        </Col>
      </Form.Row>

      <Form.Control as="select" ref={register} onChange={(e) => setFrequency(e.target.value)} name="frequency">
        {freqOptions.map((freq, i) => {
          return (
            <option key={i} value={freq}>
              {freq}
            </option>
          );
        })}
      </Form.Control>

      {(frequency === freqOptions[1] || frequency === freqOptions[2]) && (
        <Form.Row>
          <Form.Check inline type="radio" label="S" name="emailDay" value={0} ref={register} required/>
          <Form.Check inline type="radio" label="M" name="emailDay" value={1} ref={register} required/>
          <Form.Check inline type="radio" label="T" name="emailDay" value={2} ref={register} required/>
          <Form.Check inline type="radio" label="W" name="emailDay" value={3} ref={register} required/>
          <Form.Check inline type="radio" label="T" name="emailDay" value={4} ref={register} required/>
          <Form.Check inline type="radio" label="F" name="emailDay" value={5} ref={register} required/>
          <Form.Check inline type="radio" label="S" name="emailDay" value={6} ref={register} required/>
        </Form.Row>
      )}

      {frequency === freqOptions[2] && <Form.Check type="switch" id="thisWeek" name="thisWeek" label="This Week?" ref={register} />}

      {frequency === freqOptions[3] && <Form.Control as="input" ref={register} type="number" name="dayOfMonth" min={0} max={31} placeholder="Date" required />}
      <button type="submit">Submit</button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return { profiles: state.emailProfiles }
}

export default connect(mapStateToProps, { create: createEmailProfile, update: updateEmailProfile })(CreateProfile);
