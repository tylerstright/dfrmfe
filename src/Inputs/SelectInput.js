import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function SelectInput(props) {
    // const [field, setField] = useState([]);
    const [data, setData] = useState(null);

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

    if (!data) {
        return <></>;
    }

    return (
        <Form.Select aria-label={props.label}>
            <option>{props.includeLabel === false ? null : props.label}</option>
            {data.map(rec => (<option key={rec.id} value={rec.id}>{rec.id}</option>))}
        </Form.Select>
    )
}