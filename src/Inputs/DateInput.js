import React from 'react';
import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function DateInput({ name, label, register, errors, validationSchema, required }) {

    return (
        <Form.Group className='my-3' controlId={name}>
            <Form.Label>
                {label}
                {required && '*'}
            </Form.Label>
            <Form.Control
                type='date'
                {...register(name, validationSchema)}
                // aria-describedby="basic-addon1"
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}