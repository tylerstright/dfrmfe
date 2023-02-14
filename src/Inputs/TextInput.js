import React from 'react';
import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/
// https://jujuontheweb.medium.com/how-to-use-react-hook-form-with-your-custom-form-components-a86a1a77cf3c

export default function TextInput({ name, label, type, placeholder, register, errors, validationSchema, required, rows }) {

    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>
                {label}
                {required && '*'}
                </Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                rows= {rows ? rows : null }
                {...register(name, validationSchema)}
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}

        </Form.Group>
    )
}