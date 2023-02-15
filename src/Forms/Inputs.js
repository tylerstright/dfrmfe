import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import axios from 'axios';

// https://react-bootstrap.github.io/forms/form-text/
// https://jujuontheweb.medium.com/how-to-use-react-hook-form-with-your-custom-form-components-a86a1a77cf3c

export function CheckBoxInput({ name, label, register }) {

    return (
        <Form.Group className='my-3' controlId={name}>
            <Form.Check
                type="checkbox"
                label={label}
                {...register("active")}
            />
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function DateInput({ name, label, register, errors, validationSchema, required, readOnly }) {

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
                readOnly={readOnly}
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function HiddenId({ id, register }) {

    return (
        <Form.Group className="d.none" controlId={'id'}>
            <Form.Control
                type={'hidden'}
                value={id}
                readOnly
                {...register('id')}
            />
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function ImageInput({ name, label, register, errors, validationSchema, required }) {

    return (
        <Form.Group className='my-3' controlId={name}>
            <Form.Label>
                {label}
                {required && '*'}
            </Form.Label>
            <Form.Control
                type='file'
                // aria-label="Choose File"
                // aria-describedby="basic-addon1"
                accept='image'
                {...register(name, validationSchema)}
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function MultiSelectInput({ name, label, api, register, errors, validationSchema, required, readOnly }) {
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
                readOnly={readOnly}
            >
                {options.map(o => (<option key={o.id} value={o.id}>{o.id}</option>))}
            </Form.Select>
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function SelectInput({ name, label, api, register, errors, validationSchema, required, readOnly }) {
    const [options, setOptions] = useState(null);

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
                readOnly={readOnly}
            >
                {options.map(o => (<option key={o.id} value={o.id}>{o.id}</option>))}
            </Form.Select>
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function TextAreaInput({ name, label, rows, placeholder, register, errors, validationSchema, required, readOnly }) {

    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>
                {label}
                {required && '*'}
            </Form.Label>
            <Form.Control
                as='textarea'
                rows={rows}
                placeholder={placeholder}
                {...register(name, validationSchema)}
                readOnly={readOnly}
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}

        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function TextInput({ name, label, type, placeholder, register, errors, validationSchema, required, readOnly }) {

    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>
                {label}
                {required && '*'}
            </Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                {...register(name, validationSchema)}
                readOnly={readOnly}
            />
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
