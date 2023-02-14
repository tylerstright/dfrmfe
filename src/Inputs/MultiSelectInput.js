import React, { useState, useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import axios from 'axios';

// https://react-bootstrap.github.io/forms/form-text/

export default function MultiSelectInput({ name, label, api, register, errors, validationSchema, required }) {
  const [field, setField] = useState([]);
  const [data, setData] = useState(null);

  // hit provided API
  useEffect(() => {
    axios.get(api) // USE THE PROXY!
      .then(response => {
        // console.log('multiresponse ');
        // console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        return error;
      });
  }, [api])

  if (!data) {
    return <></>
  }

  return (
    <Form.Group as={Col} controlId={name}>
      <Form.Label>
        {label}
        {required && '*'}
      </Form.Label>
      <Form.Control
        as="select"
        multiple
        value={field}
        onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}
        {...register(name, validationSchema)}
      >
        {data.map(emp => (<option key={emp.id} value={emp.id}>{emp.id}</option>))}
      </Form.Control>
      {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
    </Form.Group>
  )
}
