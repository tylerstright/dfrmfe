import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function MultiSelectInput(props) {
  const [field, setField] = useState([]);
  const [data, setData] = useState(null);

  let controlId;

  // auto loading employees currently 2/9/23
  useEffect(() => {
    axios.get('/api/employee/') // USE THE PROXY!
      .then(response => {
        console.log('multiresponse ');
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        return error;
      });
  }, [props])

  useEffect(() => {
    controlId = props.label.replace(' ', '_').toLowerCase();
  }, [props])

  if (!data) {
    return <></>;
  }

  return (
    <Form.Group as={Col} controlId={controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
        {data.map(emp => (<option value={emp.id}>{emp.id}</option>))}
      </Form.Control>
    </Form.Group>
  )
}