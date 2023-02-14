import React, { useState, useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import axios from 'axios';

// https://react-bootstrap.github.io/forms/form-text/

export default function MultiSelectInput({ name, label, api, register, errors, validationSchema, required }) {
  const [options, setOptions] = useState(null);

  // hit provided API
  useEffect(() => {
    axios.get(api) // USE THE PROXY!
      .then(response => {
        // console.log(response.data);
        setOptions(response.data);
      })
      .catch(error => {
        return error;
      });
  }, [api])


  if (!options) {
    return <></>
  }

  return (
    <Form.Group as={Col} controlId={name}>
      <Form.Label>
        {label}
        {required && '*'}
      </Form.Label>
      <Form.Select
        multiple={true}
        {...register(name, validationSchema)}
      >
        {options.map(o => (<option key={o.id} value={o.id}>{o.id}</option>))}
      </Form.Select>
      {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
    </Form.Group>
  )

}
