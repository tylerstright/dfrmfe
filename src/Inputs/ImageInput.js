import React from 'react';
import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function ImageInput({ name, label, placeholder, register, errors, validationSchema, required }) {

    return (
        <Form.Group className='my-3' controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type='file'
                // aria-label="Choose File"
                // aria-describedby="basic-addon1"
                placeholder={placeholder}
                accept='image'
                {...register(name, validationSchema)}
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}