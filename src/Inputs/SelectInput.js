import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function SelectInput({ name, label, api, register, errors, validationSchema, required }) {
    const [options, setOptions] = useState(null);

    useEffect(() => {
        axios.get(api) // USE THE PROXY!
            .then(response => {
                // console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                return error;
            });
    }, [api])

    if (!options) {
        return <></>;
    }

    return (
        <Form.Group controlId={name} >
            <Form.Label >
                {label}
                {required && '*'}
            </Form.Label>
            <Form.Select
                aria-label={label}
                {...register(name, validationSchema)}
            >
                {options.map(o => (<option key={o.id} value={o.id}>{o.id}</option>))}
            </Form.Select>
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}